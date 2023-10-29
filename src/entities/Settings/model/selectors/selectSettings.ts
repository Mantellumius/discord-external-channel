import { StateSchema } from '@app/providers/StoreProvider';

export const selectSettings = (state: StateSchema) => state.settings;