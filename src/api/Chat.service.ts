import db from "../firebase/db";

export class ChatService {
  public fetchChats = async () =>
    db
      .collection('chats')
      .get()
      .then((snapshot) =>
        snapshot.docs.map((doc) => (
          { id: doc.id, ...doc.data() }
        ))
      )
}