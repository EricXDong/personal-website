import { REMOVE_BANNER } from '../reducers/banners';

export interface RemoveBannerAction {
    type: string;
    id: string;
}

export default (id: string) => ({
    type: REMOVE_BANNER,
    id,
});
