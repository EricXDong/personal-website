import { createStore, combineReducers, compose } from 'redux';

import navigation, { NavigationState } from './navigation';

export interface RootState {
    navigation: NavigationState;
}

export default createStore(
    combineReducers({
        navigation,
    }),
    {},
    compose(
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);
