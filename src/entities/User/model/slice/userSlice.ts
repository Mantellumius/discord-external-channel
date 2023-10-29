import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DISCORD_TOKEN } from '@shared/consts/localStorage';
import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
	token: '',
};

export const userSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			localStorage.setItem(DISCORD_TOKEN, action.payload);
			state.token = action.payload;
		},
		initAuthData: (state) => {
			const user = localStorage.getItem(DISCORD_TOKEN);
			if (user) {
				state.token = user;
			}
		},
	},
});

export const { actions, reducer } = userSlice;