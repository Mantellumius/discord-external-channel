import { StateSchema } from '@app/providers/StoreProvider';

export const selectChannelId = (state: StateSchema) => state.channel.channelId;