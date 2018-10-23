import { createStore, combineReducers, compose } from 'redux';

import navigation, { NavigationState } from './navigation';
import banners, { BannersState } from './banners';

export interface RootState {
    navigation: NavigationState;
    banners: BannersState;
}

export default createStore(
    combineReducers({
        navigation,
        banners,
    }),
    {},
    compose((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
);
