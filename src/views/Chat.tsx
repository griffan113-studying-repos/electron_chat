import { ChatUserList } from "../components/ChatUserList";
import { ViewTitle } from "../components/shared/ViewTitle";
import { ChatMessagesList } from "../components/ChatMessagesList";

export const Chat = () => {
  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <ViewTitle />
        <ChatMessagesList />
      </div>
    </div>
  );
}