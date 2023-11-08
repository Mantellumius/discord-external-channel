import { DISCORD_TOKEN } from '@shared/consts/localStorage';
import axios from 'axios';

export const DiscordApi = 'https://discord.com/api/v10';
export const $discord = axios.create({
	baseURL: DiscordApi,
	headers: {
		authorization: localStorage.getItem(DISCORD_TOKEN) ?? '',
	}
});
