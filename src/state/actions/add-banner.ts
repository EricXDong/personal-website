import { ADD_BANNER, BannerTypes } from '../reducers/banners';

export interface AddBannerAction {
    type: string;
    bannerType: BannerTypes;
    message: string;
}

export default (bannerType: BannerTypes, message: string): AddBannerAction => ({
    type: ADD_BANNER,
    bannerType,
    message,
});
