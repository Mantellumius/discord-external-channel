import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CHANNEL_ID } from '@shared/consts/localStorage';
import replaceAllFrom from '@shared/lib/replaceAllFrom/replaceAllFrom';
import { APIMessage, EmbedType } from 'discord-api-types/v10';
import { ChannelSchema } from '../types/channelSchema';

const initialState: ChannelSchema = {
	messages: [],
	channelId: '',
};

export const channelSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setMessages(state, action: PayloadAction<APIMessage[]>) {
			action.payload.forEach(m => {
				m.content = replaceAllFrom(m.embeds.
					filter(e => e.type === EmbedType.Image)
					.map(e => e.url ?? ''), '', m.content
				);
			});
			state.messages = action.payload;
		},
		setChannelId(state, action: PayloadAction<string>) {
			localStorage.setItem(CHANNEL_ID, action.payload);
			state.channelId = action.payload;
			state.messages = [];
		},
		initChannel(state) {
			state.channelId = localStorage.getItem(CHANNEL_ID) || '';
		},
	},
});

export const { actions, reducer } = channelSlice;