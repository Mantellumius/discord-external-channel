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
			const compactedMessages: Message[] = [];
			for (const message of action.payload) {
				const lastMessage = compactedMessages.at(-1);
				if (lastMessage && message.author.id === lastMessage.author.id) {
					lastMessage.content+= `\r\n${message.content}`;
				} else {
					compactedMessages.push(message);
				}
			}
			state.messages = compactedMessages;
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