import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import "d3";
const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');body.svelte-1c5un8a{font-family:"Bebas Neue", sans-serif}`,
  map: null
};
const App = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main data-svelte-h="svelte-1c6q8z2"><h1 style="font-family: 'Bebas Neue', sans-serif">Pitch Location Visualization</h1> <hr style="width: 50%; margin: auto; margin-top: 5px; border-top: 2px solid black;"> <img src="assets/baseball.png" alt="Baseball Image" style="width: 100px; height: auto; position: absolute; bottom: 10px; left: 10px;">git
    <body class="svelte-1c5un8a"></body> <style>body {
           
            text-align: center; /* Center text horizontally */
            background-color: RGB(255, 255, 255);
            
        
        }</style> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(App, "App").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
