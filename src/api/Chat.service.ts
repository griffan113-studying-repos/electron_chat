import db from "../firebase/db";
import { IChat } from "./@types/IChat.interface";

export class ChatService {
  public fetchChats = async () =>
    db
      .collection('chats')
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) => {
          const docData: IChat = { ...doc.data() } as IChat;

          return { id: doc.id, ...docData }
        })
      )
}