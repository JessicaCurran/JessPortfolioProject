import { d as attr, e as stringify, f as slot } from "../../chunks/index.js";
import "clsx";
import { b as base } from "../../chunks/paths.js";
function Header($$payload) {
  $$payload.out += `<header class="svelte-16ydqsa"><div class="home"></div> `;
  Navigation($$payload);
  $$payload.out += `<!----></header>`;
}
function Navigation($$payload) {
  $$payload.out += `<nav class="svelte-9i9rc9"><a${attr("href", `${stringify(base)}/`)} class="home svelte-9i9rc9"><img${attr("src", `${stringify(base)}/home.png`)} alt="home" class="svelte-9i9rc9"></a> <ul class="svelte-9i9rc9"><li class="svelte-9i9rc9"><a${attr("href", `${base}/MyCV`)} class="svelte-9i9rc9">My CV</a></li> <li class="svelte-9i9rc9"><a${attr("href", `${base}/Aboutme`)} class="svelte-9i9rc9">About me</a></li> <li class="svelte-9i9rc9"><a${attr("href", `${base}/Mywork`)} class="svelte-9i9rc9">My work</a></li></ul></nav>`;
}
function _layout($$payload, $$props) {
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-awe9f"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main>`;
}
export {
  _layout as default
};
