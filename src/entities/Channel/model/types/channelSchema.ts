import { APIMessage } from 'discord-api-types/v10';

export interface ChannelSchema {
	messages: APIMessage[];
	channelId: string;
}