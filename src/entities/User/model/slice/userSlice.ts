import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DISCORD_TOKEN } from '@shared/consts/localStorage';
import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
	token: localStorage.getItem(DISCORD_TOKEN) ?? '',
};

export const userSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
	},
	extraReducers: builder => builder.addMatcher(
		(action: PayloadAction<unknown>) => action.type.startsWith('messages/setToken'),
		(_, action: PayloadAction<string>) => {
			localStorage.setItem(DISCORD_TOKEN, action.payload);
		})
});

export const { actions, reducer } = userSlice;