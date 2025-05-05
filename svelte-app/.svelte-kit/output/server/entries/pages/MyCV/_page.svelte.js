import { i as attr_style, d as attr, e as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload) {
  $$payload.out += `<div class="background svelte-1604zz2"${attr_style(`background-image: url('${stringify(base)}/cloud.jpg');`)}></div> <h1 class="svelte-1604zz2">My CV</h1> <img${attr("src", `${stringify(base)}/cv.png`)} alt="cv" class="cv svelte-1604zz2">`;
}
export {
  _page as default
};
