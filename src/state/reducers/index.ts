import { createStore, combineReducers, compose } from 'redux';

import navigation, { NavigationState } from './navigation';
import banners, { BannersState } from './banners';
import videos, { VideosState } from './videos';

export interface RootState {
    navigation: NavigationState;
    banners: BannersState;
    videos: VideosState;
}

export default createStore(
    combineReducers({
        navigation,
        banners,
        videos,
    }),
    {},
    compose((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
);
