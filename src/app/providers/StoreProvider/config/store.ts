import { chatReducer } from '@entities/Chat';
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from '@entities/User';
import { settingsReducer } from '@entities/Settings';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		chat: chatReducer,
		user: userReducer,
		settings: settingsReducer
	};
	return configureStore<StateSchema>({
		reducer: rootReducers,
		preloadedState: initialState,
	});
}
