import { AnyAction } from 'redux';

import { NavigationPaths } from '../../const/navigation';
import { SetPathAction } from '../actions';

export const SET_PATH = 'SET_PATH';

export interface NavigationState {
    path: NavigationPaths;
}

const defaultState: NavigationState = {
    path: NavigationPaths.HOME,
};

const actionHandlers = {
    [SET_PATH]: (state: NavigationState, action: SetPathAction) =>
        Object.assign({}, state, {
            path: action.path,
        }),
};

export default (state: NavigationState = defaultState, action: AnyAction) => {
    return actionHandlers[action.type] ? actionHandlers[action.type](state, action) : state;
};
