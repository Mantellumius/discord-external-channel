import { StateSchema } from '@app/providers/StoreProvider';

export const selectTextColorWithTransperancy = (state: StateSchema) =>
	`${state.settings.textColor}${((Math.round(state.settings.textColorTransperancy * 2.55)).toString(16).padStart(2, '0'))}`;
