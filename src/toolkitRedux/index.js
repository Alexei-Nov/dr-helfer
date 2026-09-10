import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";


const saveToLocalStorage = (state) => {
	try {
		localStorage.setItem('state', JSON.stringify(state));
	} catch (e) {
		console.error(e);
	}
};

const rootReducer = combineReducers({
	toolkit: toolkitSlice
})

export const store = configureStore({
	reducer: rootReducer,
})

store.subscribe(() => {
	saveToLocalStorage(store.getState());
});