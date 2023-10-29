import { Message } from './Message';

export interface ChatSchema {
	messages: Message[];
	channelId: string;
}