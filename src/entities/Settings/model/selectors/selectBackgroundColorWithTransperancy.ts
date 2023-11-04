import { StateSchema } from '@app/providers/StoreProvider';

export const selectBackgroundColorWithTransperancy = (state: StateSchema) =>
	`${state.settings.backgroundColor}${Math.round(state.settings.backgroundTransperancy * 2.55).toString(16).padStart(2, '0')}`;
