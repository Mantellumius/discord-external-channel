import { channelReducer } from '@entities/Channel';
import { settingsReducer } from '@entities/Settings';
import { userReducer } from '@entities/User';
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		channel: channelReducer,
		user: userReducer,
		settings: settingsReducer
	};
	return configureStore<StateSchema>({
		reducer: rootReducers,
		preloadedState: initialState,
	});
}
