import { StateSchema } from '@app/providers/StoreProvider';

export const selectChannelId = (state: StateSchema) => state.chat.channelId;