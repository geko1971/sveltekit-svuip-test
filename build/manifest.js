export const manifest = {
	appDir: "_app",
	assets: new Set([]),
	_: {
		mime: {},
		entry: {"file":"start-99cb4305.js","js":["start-99cb4305.js","chunks/vendor-61d49866.js"],"css":["assets/vendor-f43f5aed.css"]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/?$/,
				params: null,
				load: () => import('./server/entries/endpoints/api/index.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/ted\/tbs\/solution\/([^/]+?)\/pattern\/?$/,
				params: (m) => ({ solutionName: m[1]}),
				load: () => import('./server/entries/endpoints/api/ted/tbs/solution/_solutionName_/pattern/index.js')
			}
		]
	}
};
