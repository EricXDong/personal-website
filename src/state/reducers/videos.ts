import { AnyAction } from 'redux';

import { AuthenticateVideosAction } from '../actions/authenticate-videos';

export const AUTHENTICATE_VIDEOS = 'AUTHENTICATE_VIDEOS';

export interface VideosState {
    isAuthenticated: boolean;
}

const defaultState: VideosState = {
    isAuthenticated: false,
};

const actionHandlers = {
    [AUTHENTICATE_VIDEOS]: (state: VideosState, action: AuthenticateVideosAction) =>
        Object.assign({}, state, {
            isAuthenticated: action.isAuthenticated,
        }),
};

export default (state: VideosState = defaultState, action: AnyAction) => {
    return actionHandlers[action.type] ? actionHandlers[action.type](state, action) : state;
};
