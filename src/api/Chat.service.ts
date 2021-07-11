import db from "../firebase/db";

interface IChat {
  name: string;
  description: string;
  image: string;
  admin?: string;
}

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