import { AnyAction } from 'redux';

import { AddBannerAction } from '../actions';

export const ADD_BANNER = 'ADD_BANNER';

export enum BannerTypes {
    INFO,
    WARNING,
    ERROR,
}

export interface Banner {
    type: BannerTypes;
    message: string;
}

export interface BannersState {
    banners: Banner[];
}

const defaultState: BannersState = {
    banners: [],
};

const actionHandlers = {
    [ADD_BANNER]: (state: BannersState, action: AddBannerAction) =>
        Object.assign({}, state, {
            banners: state.banners.concat([
                {
                    type: action.bannerType,
                    message: action.message,
                },
            ]),
        }),
};

export default (state: BannersState = defaultState, action: AnyAction) => {
    return actionHandlers[action.type] ? actionHandlers[action.type](state, action) : state;
};
