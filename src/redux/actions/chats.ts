import { ChatService } from '../../api/Chat.service';

const chatService = new ChatService()

export const fetchChats = () => {
  return async () => {
    await chatService.fetchChats();
  }
}