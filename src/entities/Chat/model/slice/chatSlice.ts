import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CHANNEL_ID } from '@shared/consts/localStorage';
import { Message } from '../types/Message';
import { ChatSchema } from '../types/chatSchema';

const initialState: ChatSchema = {
	messages: [],
	channelId: '',
};

export const chatSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setMessages(state, action: PayloadAction<Message[]>) {
			state.messages = action.payload;
		},
		setChannelId(state, action: PayloadAction<string>) {
			localStorage.setItem(CHANNEL_ID, action.payload);
			state.channelId = action.payload;
			state.messages = [];
		},
		initChat(state) {
			state.channelId = localStorage.getItem(CHANNEL_ID) || '';
		},
	},
});

export const { actions, reducer } = chatSlice;