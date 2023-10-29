import { ChatSchema } from '@entities/Chat';
import { SettingsSchema } from '@entities/Settings';
import { UserSchema } from '@entities/User';

export interface StateSchema {
	chat: ChatSchema;
	user: UserSchema;
	settings: SettingsSchema;
}