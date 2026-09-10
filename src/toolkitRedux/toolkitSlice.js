import { createSlice } from "@reduxjs/toolkit";

// const loadFromLocalStorage = () => {
// 	try {
// 		const stateStr = localStorage.getItem('state');
// 		return stateStr ? JSON.parse(stateStr) : undefined;
// 	} catch (e) {
// 		console.error(e);
// 		return undefined;
// 	}
// };

const defaultState = {
	preloaderInit: false,
	pages: [
		{
			"page_slug": "shops-chart",
			"page_title": "Шопс-чарты",
			"blocks": [
				{
					"block_slug": "preloader",
					"block_state": {}
				},
				{
					"block_slug": "iframe",
					"block_state": {
						"src": "https://adbloggers-landing.ktsprod.ru/",
					}
				},
			]
		},
	],

}


const toolkitSlice = createSlice({
	name: "toolkit",
	initialState: defaultState,
	reducers: {
		setPreloaderInit(state, action) {
			state.preloaderInit = action.payload
		},
	}
})

export default toolkitSlice.reducer
export const { setPreloaderInit } = toolkitSlice.actions