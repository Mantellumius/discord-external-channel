import { ChannelSchema } from '@entities/Channel';
import { SettingsSchema } from '@entities/Settings';
import { UserSchema } from '@entities/User';

export interface StateSchema {
	channel: ChannelSchema;
	user: UserSchema;
	settings: SettingsSchema;
}