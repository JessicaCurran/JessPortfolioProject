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
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Aboutme",
				pattern: /^\/Aboutme\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Artwork",
				pattern: /^\/Artwork\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/At home work",
				pattern: /^\/At home work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/College work",
				pattern: /^\/College work\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Digital",
				pattern: /^\/Digital\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Games",
				pattern: /^\/Games\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/MyCV",
				pattern: /^\/MyCV\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/Mywork",
				pattern: /^\/Mywork\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/Traditional",
				pattern: /^\/Traditional\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
