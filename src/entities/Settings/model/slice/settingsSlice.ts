import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SETTINGS } from '@shared/consts/localStorage';
import { SettingsSchema } from '../types/settingsSchema';

const initialState: SettingsSchema = {
	backgroundOpacity: 100,
	backgroundColor: '#000000',
	textColorOpacity: 100,
	textColor: '#ffffff',
	height: 600,
	width: 500,
	messagesAmount: 25,
	fetchInterval: 1000,
	displayAuthorAvatar: true,
	minimizeToTray: false,
};
const fromLocalStorage = JSON.parse(localStorage.getItem(SETTINGS) ?? '{}');
Object.assign(initialState, fromLocalStorage);

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setSize: (state, action: PayloadAction<{ height: number; width: number; }>) => {
			state.height = action.payload.height;
			state.width = action.payload.width;
		},
		setBackgroundTransperancy: (state, action: PayloadAction<number>) => {
			state.backgroundOpacity = action.payload;
		},
		setBackgroundColor: (state, action: PayloadAction<string>) => {
			state.backgroundColor = action.payload;
		},
		setTextColor: (state, action: PayloadAction<string>) => {
			state.textColor = action.payload;
		},
		setTextColorTransperancy: (state, action: PayloadAction<number>) => {
			state.textColorOpacity = action.payload;
		},
		setDisplayAuthorAvatar: (state, action: PayloadAction<boolean>) => {
			state.displayAuthorAvatar = action.payload;
		},
		setMessagesAmount: (state, action: PayloadAction<number>) => {
			state.messagesAmount = action.payload;
		},
		setFetchInterval: (state, action: PayloadAction<number>) => {
			state.fetchInterval = action.payload;
		},
		setMinimizeToTray: (state, action: PayloadAction<boolean>) => {
			state.minimizeToTray = action.payload;
		}
	},
	extraReducers: builder => {
		return builder.addMatcher(
			(action: PayloadAction<unknown>) => action.type.startsWith('settings/set'),
			(state) => localStorage.setItem(SETTINGS, JSON.stringify(state))
		);
	}
});

export const { actions, reducer } = settingsSlice;