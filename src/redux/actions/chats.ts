import { ChatService } from '../../api/Chat.service';

export interface IAction {
  type: string;
  chats: {
    id: string;
    name: string;
    description: string;
    image: string;
    admin?: string;
  };
}

const chatService = new ChatService()

export const fetchChats = (action?: IAction) => {
  return async (dispatch: Function) => {
    const chats = await chatService.fetchChats();
    dispatch({
      type: 'CHATS_FETCH_SUCCESS',
      chats
    })

    return chats;
  }
}