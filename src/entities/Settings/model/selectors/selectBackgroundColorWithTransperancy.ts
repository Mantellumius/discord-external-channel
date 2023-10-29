import { StateSchema } from '@app/providers/StoreProvider';

export const selectBackgroundColorWithTransperancy = (state: StateSchema) => `${state.settings.backgroundColor}${state.settings.transperancy.toString(16)}`;