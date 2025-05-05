import { i as attr_style, d as attr, e as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
function _page($$payload) {
  $$payload.out += `<h1 class="svelte-92jhd7">About me</h1> <h2 class="svelte-92jhd7">Hobbies:</h2> <div id="line1" class="line1 svelte-92jhd7">Ever since i was young, i have enjoyed all things creative. I love creating and making things. <br> I have always enjoyed drawing and often experiment with different techniques. My other <br> biggest passion in life is cars. I gained a massive interest
    in cars a couple years ago and since then <br> have learned everything about them. Something that also takes up a lot of my time is my pc. I use this<br> every day to play video games, watch movies, and talk to my friends.</div> <h3 class="svelte-92jhd7">Future:</h3> <div id="line2" class="line2 svelte-92jhd7">At the moment, i am not completely sure what i want to do in the future. As i've always enjoyed being creative, i would love to work making or creating something. My goal when i 
        started this course was to become an animator but now i am not sure. Ive also always loved animals and would be interested in<br> potentially going into that field of work in the future.
        My main goal right now is to complete my course <br> and expand my skills even further.</div> <h4 class="svelte-92jhd7">Contact info:</h4> <div id="line3" class="line3 svelte-92jhd7">You can contact me by my college email @C00300855@setu.ie !</div> <div class="background svelte-92jhd7"${attr_style(`background-image: url('${stringify(base)}/cloud.jpg');`)}></div> <img${attr("src", `${stringify(base)}/art.jpg`)} alt="art" class="art svelte-92jhd7"> <img${attr("src", `${stringify(base)}/car.jpg`)} alt="car" class="car svelte-92jhd7"> <img${attr("src", `${stringify(base)}/pc.jpg`)} alt="pc" class="pc svelte-92jhd7"> <img${attr("src", `${stringify(base)}/future.jpg`)} alt="future" class="future svelte-92jhd7">`;
}
export {
  _page as default
};
