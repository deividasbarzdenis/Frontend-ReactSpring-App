import {configureStore} from "@reduxjs/toolkit";
import user from './slices/userSlice'

export const createStore = (initialState) => {

	const store = configureStore({
		reducer: {
			user
		},
	})
	return store
}

export default createStore()
