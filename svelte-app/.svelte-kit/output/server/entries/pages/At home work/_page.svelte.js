import { d as attr, i as attr_style, e as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload) {
  $$payload.out += `<nav><a${attr("href", `${stringify(base)}/Traditional`)} class="traditional svelte-ivtvv3">Traditional</a> <a${attr("href", `${stringify(base)}/Digital`)} class="digital svelte-ivtvv3">Digital</a></nav> <div class="background svelte-ivtvv3"${attr_style(`background-image: url('${stringify(base)}/cloud.jpg');`)}></div> <h1 class="svelte-ivtvv3">At Home Artwork</h1> <img${attr("src", `${stringify(base)}/naruto.png`)} alt="naruto drawing" class="naruto svelte-ivtvv3"> <img${attr("src", `${stringify(base)}/mountain.jpg`)} alt="mountain drawing" class="mountain svelte-ivtvv3">`;
}
export {
  _page as default
};
