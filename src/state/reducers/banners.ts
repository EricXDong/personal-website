import { AnyAction } from 'redux';

import { AddBannerAction, RemoveBannerAction } from '../actions';
import randomString from 'src/util/random-string';

export const ADD_BANNER = 'ADD_BANNER';
export const REMOVE_BANNER = 'REMOVE_BANNER';

export enum BannerTypes {
    INFO,
    WARNING,
    ERROR,
}

export interface Banner {
    type: BannerTypes;
    id: string;
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
                    id: randomString(),
                    message: action.message,
                },
            ]),
        }),

    [REMOVE_BANNER]: (state: BannersState, action: RemoveBannerAction) => {
        const idx = state.banners.findIndex(b => b.id === action.id);
        return Object.assign({}, state, {
            banners: state.banners.slice(0, idx).concat(state.banners.slice(idx + 1)),
        });
    },
};

export default (state: BannersState = defaultState, action: AnyAction) => {
    return actionHandlers[action.type] ? actionHandlers[action.type](state, action) : state;
};
