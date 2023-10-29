import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

export const StoreProvider: FC<Props> = ({ children, initialState }) => {
	const store = createReduxStore(initialState);
	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};

interface Props extends PropsWithChildren {
	initialState?: StateSchema;
}