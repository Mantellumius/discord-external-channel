import { StateSchema } from '@app/providers/StoreProvider';

export const selectMessages = (state: StateSchema) => state.channel.messages;