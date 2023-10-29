import { StateSchema } from '@app/providers/StoreProvider';

export const selectToken = (state: StateSchema) => state.user.token;