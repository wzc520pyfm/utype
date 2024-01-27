import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";
import node from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import svelte from "rollup-plugin-svelte";
import image from "@rollup/plugin-image";
import execute from "rollup-plugin-execute";
// import progress from "rollup-plugin-progress";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import analyze from "rollup-plugin-analyzer";

const isProd = process.env.NODE_ENV === "production";

export default {
  input: `src/index.ts`,
  output: {
    name: "index",
    dir: "dist",
    format: "amd"
  },
  plugins: [
    isProd &&
      analyze({
        summaryOnly: true
      }),
    // progress(),
    execute("node scripts/open-playground"),
    image(),
    typescript({ tsconfig: "tsconfig.json" }),

    svelte({
      emitCss: false,
      compilerOptions: {
        dev: !isProd
      }
      // enable run-time checks when not in production
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        isProd ? "production" : "development"
      )
    }),
    node({
      browser: true,
      dedupe: ["svelte"]
    }),
    commonjs(),
    // Minify
    isProd && terser(),
    json(),
    !isProd &&
      serve({
        contentBase: "dist",
        port: 5000
      })
  ]
};
