import { AnyAction } from 'redux';

import { NavigationPaths } from 'src/const/navigation';
import { SetPathAction } from '../actions';

export const SET_PATH = 'SET_PATH';

export interface NavigationState {
    path: NavigationPaths | null;
}

const defaultState: NavigationState = {
    path: null,
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
