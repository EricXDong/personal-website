import { NavigationPaths } from '../../const/navigation';
import { SET_PATH } from '../reducers/navigation';

export interface SetPathAction {
    type: string;
    path: NavigationPaths;
}

export default (path: NavigationPaths): SetPathAction => ({
    type: SET_PATH,
    path,
});
