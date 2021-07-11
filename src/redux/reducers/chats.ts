import { IAction } from "../actions/chats";

const DEFAULT_STATE = {
  items: []
}

export const chatReducer = (state = DEFAULT_STATE, action: IAction) => {
  switch (action.type) {
    case 'CHATS_FETCH_SUCCESS':
      return { items: action.chats };
    default: {
      return state;
    }
  }
}