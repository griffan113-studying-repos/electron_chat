import { Dispatch } from 'redux';

import { FormData } from "../@types/FormData.type";
import { AuthService } from "../../api/Auth.service";
import { Action } from '../@types/Action.enum';
import { UserProfile } from '../../api/@types/UserProfile.type';

export type IRegisterAction = {
  type: Action.AUTH_REGISTER_SUCCESS,
}

export type IAuthChangeAction = {
  type: Action.AUTH_ON_INIT | Action.AUTH_ON_SUCCESS
}

const authService = new AuthService();

export const register = (formData: FormData) => (dispatch: Dispatch<IRegisterAction>) => {
  authService.register(formData).then((user) => {
    console.log(user);
    dispatch({
      type: Action.AUTH_REGISTER_SUCCESS,
    })
    return user;
  })
}

export const onAuthChange = () => (dispatch: Dispatch<IAuthChangeAction>) => {
  dispatch({ type: Action.AUTH_ON_INIT });
  authService.onAuthStateChange((authUser: any) => {
    if (authUser) {
      dispatch({ type: Action.AUTH_ON_SUCCESS });
      console.log("Authenticated");
    } else {
      console.log("Not authenticated");
    }
  })
}
