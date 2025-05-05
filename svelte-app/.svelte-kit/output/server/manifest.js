export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "https://github.com/JessicaCurran/JessPortfolioProject.git/_app",
	assets: new Set([".nojekyll","art.jpg","background1.png","background2.png","banana.jpg","car.jpg","chicken.png","city.png","cloud.jpg","colourblock collage.png","cow.png","cv.png","drawing2.jpg","favicon.png","fish sprite.png","fish.jpg","fishing boat.png","flower.jpg","fox.png","frog.png","future.jpg","game1.png","game2.png","game3.png","games.png","gamu.png","girl.png","girl2.png","girl3.png","girl4.jpg","guy1.png","guy2.png","guy3.png","heart.jpg","home.png","joker.jpg","lisa.jpg","mountain.jpg","mushroom3.jpg","mushrooms.png","mushrooms2.jpg","naruto.png","octopus.jpg","pc.jpg","porsche.jpg","rat1.png","rat2.png","rick.jpg","Rize.png","s13.jpg","skeleton.png","skull.jpg","skull2.jpg","Styles/global.css","tears.jpg","tokyo ghoul complete.png","wheat.png","wizard.jpg","zombie1.png","zombie2.png","zombie3.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.hnlFZjsp.js",app:"_app/immutable/entry/app.BQhCSi7g.js",imports:["_app/immutable/entry/start.hnlFZjsp.js","_app/immutable/chunks/DGF8dDUO.js","_app/immutable/chunks/Bmc6rAZP.js","_app/immutable/chunks/CMaI8ezL.js","_app/immutable/chunks/BD9M3rf3.js","_app/immutable/entry/app.BQhCSi7g.js","_app/immutable/chunks/Bmc6rAZP.js","_app/immutable/chunks/BHmM-bco.js","_app/immutable/chunks/CBGgmFnK.js","_app/immutable/chunks/BD9M3rf3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/https://github.com/JessicaCurran/JessPortfolioProject.git/","/https://github.com/JessicaCurran/JessPortfolioProject.git/Aboutme","/https://github.com/JessicaCurran/JessPortfolioProject.git/Artwork","/https://github.com/JessicaCurran/JessPortfolioProject.git/At home work","/https://github.com/JessicaCurran/JessPortfolioProject.git/College work","/https://github.com/JessicaCurran/JessPortfolioProject.git/Digital","/https://github.com/JessicaCurran/JessPortfolioProject.git/Games","/https://github.com/JessicaCurran/JessPortfolioProject.git/MyCV","/https://github.com/JessicaCurran/JessPortfolioProject.git/Mywork","/https://github.com/JessicaCurran/JessPortfolioProject.git/Traditional"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
