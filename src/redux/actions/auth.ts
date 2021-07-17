import { Dispatch } from 'redux';

import { FormData } from "../@types/FormData.type";
import { AuthService } from "../../api/Auth.service";
import { Action } from '../@types/Action.enum';

export type IAuthAction = {
  type: Action.AUTH_REGISTER_SUCCESS,
}

const authService = new AuthService();

export const register = (formData: FormData) => (dispatch: Dispatch<IAuthAction>) => {
  authService.register(formData).then((user) => {
    console.log(user);
    dispatch({
      type: Action.AUTH_REGISTER_SUCCESS,
    })
    return user;
  })
}