import { Dispatch } from 'redux';

import { ChatService } from '../../api/Chat.service';
import { Action } from '../@types/Action.enum';
import { Chat } from '../@types/Chat.type';

export type IChatAction = {
  type: Action.FETCH_SUCCESS;
  chats: Chat[];
}

const chatService = new ChatService()

export const fetchChats = () => {
  return async (dispatch: Dispatch<IChatAction>) => {
    const chats = await chatService.fetchChats();
    dispatch({
      type: Action.FETCH_SUCCESS,
      chats
    })

    return chats;
  }
}