// @ts-ignore
import App from "./svelte/App.svelte";
import { writable, readable, get } from "svelte/store";
import { PluginUtils } from "./vendor/pluginUtils";

export type FlashInfo = (message: string) => void;

export type ShowModal = {
  (code: string, subtitle?: string, links?: string[]): void;
};

// });
// return () => disposable.dispose();

// Store Objects
const __sandbox = writable({}); // Internal...for Markers
const markers = readable([], set => {
  const sandbox = get(__sandbox);
  const disposable = sandbox.editor.onDidChangeModelDecorations(() => {
    const allMarkers = sandbox.monaco.editor
      .getModelMarkers({})
      .map((marker, index) => {
        return {
          ...marker,
          key: index.toString()
        };
      });
    set(allMarkers);

    return () => disposable.dispose();
  });
});
const model = writable({});
const code = writable(""); // Has to be writable for the modelChanged events.
const debounce = writable(true);

function makePlugin(utils: PluginUtils) {
  const customPlugin: import("./vendor/playground").PlaygroundPlugin = {
    id: "svelte",
    displayName: "Svelte", // The tab label
    // willMount: (sandbox, container) => {
    //   // Not used
    // },
    didMount: (sandbox, container) => {
      function useDebounce(opt: boolean = true) {
        debounce.set(opt);
      }

      function formatCode() {
        sandbox.editor.getAction("editor.action.formatDocument").run();
      }

      function setCode(userCode, options?: { format: boolean }) {
        sandbox.setText(userCode);
        if (options) {
          options.format && formatCode();
        }
      }

      const { flashInfo, showModal } = window.playground.ui;

      const props = {
        sandbox,
        container,
        useDebounce,
        setCode,
        formatCode,
        code,
        model,
        flashInfo,
        showModal,
        utils,
        markers
      };

      // Mount the app and pass in the store objects as props
      new App({
        target: container,
        props
      });
    },
    modelChanged: (sandbox, _model) => {
      if (!get(debounce)) {
        code.set(sandbox.getText());
        model.set(_model);
        __sandbox.set(sandbox);
      }
    },
    modelChangedDebounce(sandbox, _model) {
      if (get(debounce)) {
        code.set(sandbox.getText());
        model.set(_model);
        __sandbox.set(sandbox);
      }
    }
    // willUnmount: (sandbox, container) => {
    //   // Not used
    // },
    // didUnmount: (sandbox, container) => {
    //   // Not used
    // }
  };
  return customPlugin;
}

export default makePlugin;
