import { i as attr_style, d as attr, e as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload) {
  $$payload.out += `<div class="background svelte-ptk9u6"${attr_style(`background-image: url('${stringify(base)}/cloud.jpg');`)}></div> <h1 class="svelte-ptk9u6">Games</h1> <div id="line1" class="line1 svelte-ptk9u6">Over the past 2 years in college i have coded a few games. Some of these <br> were made using c++  and some using javascript.
    Here i will show some short clips <br> of the gameplay and explain a bit about them!</div> <div id="line2" class="line2 svelte-ptk9u6">This is the first game i made using javascript. I made all of the art <br> in this game along with coding it myself.</div> <div id="line3" class="line3 svelte-ptk9u6">This was my final game project in first year. I also made all of the art for this <br> game and i really enjoyed coding this game.</div> <div id="line4" class="line4 svelte-ptk9u6">This was the final assignment for a different class in first year. I did not <br> make the art for this game but it was still enjoyable to code!</div> <img${attr("src", `${stringify(base)}/game1.png`)} alt="game drawing" class="game1 svelte-ptk9u6"> <img${attr("src", `${stringify(base)}/game2.png`)} alt="game drawing" class="game2 svelte-ptk9u6"> <img${attr("src", `${stringify(base)}/game3.png`)} alt="game drawing" class="game3 svelte-ptk9u6">`;
}
export {
  _page as default
};
