import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SETTINGS } from '@shared/consts/localStorage';
import { PhysicalSize, appWindow } from '@tauri-apps/api/window';
import { SettingsSchema } from '../types/settingsSchema';

const initialState: SettingsSchema = {
	transperancy: 100,
	backgroundColor: '#000000',
	textColor: '#ffffff',
	height: 600,
	width: 500,
	messagesAmount: 25,
	fetchInterval: 1000,
	displayAuthorAvatar: true
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		init: (state) => {
			const settings = JSON.parse(localStorage.getItem(SETTINGS) ?? '{}');
			Object.assign(state, settings);
			appWindow.setSize(new PhysicalSize(state.width, state.height));
		},
		setSize: (state, action: PayloadAction<{ height: number; width: number; }>) => {
			state.height = action.payload.height;
			state.width = action.payload.width;
			localStorage.setItem(SETTINGS, JSON.stringify(state));
		},
		setTransperancy: (state, action: PayloadAction<number>) => {
			state.transperancy = action.payload;
			localStorage.setItem(SETTINGS, JSON.stringify(state));
		},
		setBackgroundColor: (state, action: PayloadAction<string>) => {
			state.backgroundColor = action.payload;
			localStorage.setItem(SETTINGS, JSON.stringify(state));
		},
		setTextColor: (state, action: PayloadAction<string>) => {
			state.textColor = action.payload;
			localStorage.setItem(SETTINGS, JSON.stringify(state));
		},
		setDisplayAuthorAvatar: (state, action: PayloadAction<boolean>) => {
			state.displayAuthorAvatar = action.payload;
			localStorage.setItem(SETTINGS, JSON.stringify(state));
		},
		setMessagesAmount: (state, action: PayloadAction<number>) => {
			state.messagesAmount = action.payload;
			localStorage.setItem(SETTINGS, JSON.stringify(state));
		},
		setFetchInterval: (state, action: PayloadAction<number>) => {
			state.fetchInterval = action.payload;
			localStorage.setItem(SETTINGS, JSON.stringify(state));
		}
	}
});

export const { actions, reducer } = settingsSlice;