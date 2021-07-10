import { useEffect } from "react";

import { JoinedChats } from "../components/JoinedChats";
import { AvaliableChats } from "../components/AvaliableChats";
import { NameContainer } from "../components/NameContainer";
import { ChatService } from "../api/Chat.service";

export const Home = () => {
  useEffect(() => {
    const chatService = new ChatService();

    chatService.fetchChats();
  }, [])

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChats />
      </div>
      <div className="col-9 fh">
        <NameContainer />
        <div className="container-fluid">
          <AvaliableChats />
        </div>
      </div>
    </div>
  )
}