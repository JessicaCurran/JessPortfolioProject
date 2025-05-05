import { i as attr_style, d as attr, e as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
function _page($$payload) {
  $$payload.out += `<h1 class="svelte-1tth2dq">Jess' Site</h1> <h2 class="svelte-1tth2dq">Hello!</h2> <div id="line1" class="line1 svelte-1tth2dq">My name is Jess and this is my website. I am 21 and am currently studying <br> digital art and design. I have 
    always had a big passion for art and all things <br> creative. For most of my life i have done traditional drawings with pen and <br> paper but since starting this course, i've started exploring more digital art <br> which i would like to learn more and get better at.</div> <div id="line2" class="line2 svelte-1tth2dq">Im not sure exactly what i would like to do in the future but i would love <br> to be involved with something creative and possibly art related.</div> <div id="line3" class="line3 svelte-1tth2dq">This is my website where i will showcase some of the work i have
     done <br> over the years including drawings, games and digital artwork. My most <br> prefered art style has always been on paper using lots of colour. 
     Since <br> starting this course, i have discovered and learned all about digital art <br> and have really enjoyed learning and experimenting with all of the <br> different ways to create digital art.</div> <div class="background svelte-1tth2dq"${attr_style(`background-image: url('${stringify(base)}/cloud.jpg');`)}></div> <img${attr("src", `${stringify(base)}/tokyo ghoul complete.png`)} alt="drawing1" class="drawing1 svelte-1tth2dq"> <img${attr("src", `${stringify(base)}/drawing2.jpg`)} alt="drawing2" class="drawing2 svelte-1tth2dq">`;
}
export {
  _page as default
};
