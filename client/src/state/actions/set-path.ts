import { NavigationTypes } from '../../const/navigation';
import { SET_PATH } from '../reducers/navigation';

export interface SetPathAction {
  type: string;
  path: NavigationTypes;
}

export default (path: NavigationTypes): SetPathAction => ({
  type: SET_PATH,
  path,
});
