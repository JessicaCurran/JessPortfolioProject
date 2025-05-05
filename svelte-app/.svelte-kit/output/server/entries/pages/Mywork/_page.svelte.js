import { d as attr, i as attr_style, e as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload) {
  $$payload.out += `<nav><a${attr("href", `${stringify(base)}/College work`)} class="collegework svelte-c471tj">College Work</a> <a${attr("href", `${stringify(base)}/At home work`)} class="homework svelte-c471tj">At home Work</a></nav> <div class="background svelte-c471tj"${attr_style(`background-image: url('${stringify(base)}/cloud.jpg');`)}></div> <h1 class="svelte-c471tj">My work</h1> <img${attr("src", `${stringify(base)}/colourblock collage.png`)} alt="colourblock collage" class="colourblock svelte-c471tj"> <img${attr("src", `${stringify(base)}/skeleton.png`)} alt="skeleton drawing" class="skeleton svelte-c471tj">`;
}
export {
  _page as default
};
