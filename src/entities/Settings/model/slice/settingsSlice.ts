import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SETTINGS } from '@shared/consts/localStorage';
import { SettingsSchema } from '../types/settingsSchema';
import { PhysicalSize, appWindow } from '@tauri-apps/api/window';

const initialState: SettingsSchema = {
	transperancy: 255,
	backgroundColor: '#000000',
	height: 600,
	width: 500,
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		init: (state) => {
			const settings = JSON.parse(localStorage.getItem(SETTINGS) ?? '{}') as SettingsSchema;
			state.backgroundColor = settings.backgroundColor;
			state.transperancy = settings.transperancy;
			state.height = settings.height;
			state.width = settings.width;
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
		setColor: (state, action: PayloadAction<string>) => {
			state.backgroundColor = action.payload;
			localStorage.setItem(SETTINGS, JSON.stringify(state));
		}
	}
});

export const { actions, reducer } = settingsSlice;