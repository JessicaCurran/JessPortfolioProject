import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CafJf97E.js","_app/immutable/chunks/CBGgmFnK.js","_app/immutable/chunks/Bmc6rAZP.js","_app/immutable/chunks/DaQPahJK.js","_app/immutable/chunks/DhcnoxMt.js","_app/immutable/chunks/CMaI8ezL.js"];
export const stylesheets = ["_app/immutable/assets/0.oBEeZTwx.css"];
export const fonts = [];
