import {createSlice} from "@reduxjs/toolkit";
import {loadFromStorage, saveToStorage} from "../../utils/localStorage";

const initialState = {
	userData: null,
	jwt: null
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData(state, { payload: user }) {
			state.userData = user
		},
		setJwt(state, { payload: jwt }) {
			state.jwt = jwt
		},
		removeUserData(state) {
			state.userData = null
		},
		removeJwt(state) {
			state.jwt = null
		}
	}
})

export const saveUserToStorage = (store) => {
	store.subscribe(() => {
		const userState = store.getState().user;
		saveToStorage('user', userState);
	})
}
export const loadUserFromStorage = () => loadFromStorage('user');

export default userSlice.reducer
export const { setUserData, setJwt, removeUserData, removeJwt } = userSlice.actions
