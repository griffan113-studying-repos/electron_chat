import { Action } from "../@types/Action.enum";
import { Chat } from "../@types/Chat.type";
import { IChatAction } from "../actions/chats";

const DEFAULT_STATE = {
  items: []
}

interface IDefaultState {
  items: Array<Chat>
}

export const chatReducer = (state: IDefaultState = DEFAULT_STATE, action: IChatAction) => {
  switch (action.type) {
    case Action.FETCH_SUCCESS:
      return { items: action.chats };
    default: {
      return state;
    }
  }
}