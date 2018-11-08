import { AUTHENTICATE_VIDEOS } from '../reducers/videos';

export interface AuthenticateVideosAction {
    type: string;
    isAuthenticated: boolean;
}

export default (isAuthenticated: boolean) => ({
    type: AUTHENTICATE_VIDEOS,
    isAuthenticated,
});
