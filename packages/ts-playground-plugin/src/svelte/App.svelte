<script>
  import Welcome from "./Welcome.svelte";
  // export let sandbox;
  // export let container;
  export let useDebounce;
  export let code;
  export let setCode;
  export let model;
  export let markers;
  export let showModal;
  export let flashInfo;

  let userInput = `function echo(arg){return arg};`;

  useDebounce(true); // Default is true

  $: {
    // update the editor code on userInput change.
    setCode(userInput, {format: true});
  }

  $: {
    // The code changes as you update userInput
    console.info("code", $code);
  }


  $: {
    console.groupCollapsed("modelChanged");
    // Will be debounced by default. set useDebounce(false) to disable.
    console.info("code", $code);
    console.info("model", $model);
    console.groupEnd();
  }

  function handleFixCode() {
    setCode(`function echo<T>(arg: T):T {return arg;};`, {format: true})
  }

  function handleClear() {
    setCode("")
    userInput = ""
  }

  function handleShowModal() {
    showModal($code, "Here is your code!")
  }

  function handleFlashInfo() {
    flashInfo("Info!")
  }
</script>

<main>
  <Welcome />
  <input bind:value="{userInput}" />
  <br />
  <button on:click={handleFixCode}>Fix Code</button>
  <button on:click={handleClear}>Clear Editor</button>
  <button on:click={handleShowModal}>Show Modal</button>
  <button on:click={handleFlashInfo}>Flash Info</button>
	{#each $markers as marker}
		<p class="marker">  Line {marker.startLineNumber}:&nbsp;
      {marker.message}</p>
	{/each}
</main>

<style>
  main {
    margin: 0 auto;
    text-align: center;
    background: rgb(24, 24, 24);
    min-height: 100vh;
    padding: 20px;
  }

  h3 {
    color: white;
  }

  input {
    height: 20px;
    width: 300px;
    border: none;
    border-radius: .4rem;
    padding: 10px;
    font-size: 1.1rem;
    background: rgb(24, 24, 24);
    color: #f5f5f5;
    outline: none;
    box-shadow: -5px -5px 10px 0px rgba(43, 43, 43, .5),6px 6px 16px 0px rgba(0, 0, 0, 0.7);
    transition: box-shadow .3s;
  }

  input:focus, input:hover {
    box-shadow: -5px -5px 10px 0px rgba(43, 43, 43, .8),6px 6px 16px 0px rgba(0, 0, 0, 1);
  }
  button {
    border: none;
    background: none;
    color: dodgerblue;
    cursor: pointer;
    font-size: 1rem;
    padding: 3px 5px;
    min-width: 120px;
    margin: 5px;
    outline: none;
    border-radius: .3rem;
    transition: background-color .5s;
  }

  button:hover {
    background: rgb(61, 61, 61);
  }

  p.marker {
    color: orange;
    margin: 5px;
  }
</style>
