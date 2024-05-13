export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".ipynb_checkpoints/Clean Data Notebook-checkpoint.ipynb","Clean Data Notebook.ipynb","favicon.png","filtered_pitch_data.csv","original_data_files/02_24_2024 4_29_40 PM-Mizzou 2024@UCSD 2024.csv","original_data_files/03_02_2024 1_04_41 PM-Stephen F. Austin State@UC San Diego.csv","original_data_files/03_10_2024 12_36_41 PM-Pacific@UC San Diego.csv","original_data_files/03_17_2024 1_00_01 PM-Cal State Fullerton@UC San Diego.csv","original_data_files/04_01_2024 6_03_06 PM-UC Riverside@UC San Diego.csv","original_data_files/04_14_2024 1_04_19 PM-UC Irvine@UC San Diego.csv","original_data_files/04_14_2024 1_09_13 PM-UC Irvine@UC San Diego.csv","original_data_files/04_27_2024 2_05_33 PM-Hawaii@UC San Diego.csv"]),
	mimeTypes: {".png":"image/png",".csv":"text/csv"},
	_: {
		client: {"start":"_app/immutable/entry/start.twwpa9ka.js","app":"_app/immutable/entry/app.Ff3m3BVu.js","imports":["_app/immutable/entry/start.twwpa9ka.js","_app/immutable/chunks/entry.OHQ89CyP.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/entry/app.Ff3m3BVu.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.bdaJyo3N.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
