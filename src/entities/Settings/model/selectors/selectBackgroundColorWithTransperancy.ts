import { StateSchema } from '@app/providers/StoreProvider';

export const selectBackgroundColorWithTransperancy = (state: StateSchema) =>
	`${state.settings.backgroundColor}${(Math.round(state.settings.transperancy * 2.55)).toString(16)}`;
