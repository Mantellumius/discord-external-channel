import { DISCORD_TOKEN } from '@shared/consts/localStorage';
import axios from 'axios';

export const DiscordApi = 'https://discord.com/api/v10';
export const $discordApi = axios.create({
	baseURL: DiscordApi,
	headers: {
		authorization: localStorage.getItem(DISCORD_TOKEN) ?? '',
	}
});