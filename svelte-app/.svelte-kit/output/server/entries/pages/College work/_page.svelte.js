import { d as attr, i as attr_style, e as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload) {
  $$payload.out += `<nav><a${attr("href", `${stringify(base)}/Artwork`)} class="artwork svelte-1h66h76">Artwork</a> <a${attr("href", `${stringify(base)}/Games`)} class="games svelte-1h66h76">Games</a></nav> <div class="background svelte-1h66h76"${attr_style(`background-image: url('${stringify(base)}/cloud.jpg');`)}></div> <h1 class="svelte-1h66h76">College Artwork</h1> <img${attr("src", `${stringify(base)}/city.png`)} alt="city drawing" class="city svelte-1h66h76"> <img${attr("src", `${stringify(base)}/games.png`)} alt="game drawing" class="game svelte-1h66h76">`;
}
export {
  _page as default
};
