import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CHANNEL_ID } from '@shared/consts/localStorage';
import replaceAllFrom from '@shared/lib/replaceAllFrom/replaceAllFrom';
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
					const { attachments, embeds } = lastMessage;
					const content = replaceAllFrom([
						...attachments.map(a => a.url),
						...embeds.map(e => e.url),
					], '', message.content);
					attachments.push(...message.attachments);
					embeds.push(...message.embeds);
					lastMessage.content += `\r\n${content}`;
					lastMessage.id = message.id;
				} else {
					const content = replaceAllFrom([
						...message.attachments.map(a => a.url),
						...message.embeds.map(e => e.url),
					], '', message.content);
					console.log(message.embeds);
					message.content = content;
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