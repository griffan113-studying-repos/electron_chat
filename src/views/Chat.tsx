import { ChatUserList } from "../components/ChatUserList";
import { ViewTitle } from "../components/shared/ViewTitle";
import { ChatMessagesList } from "../components/ChatMessagesList";
import { useParams } from "react-router";

export const Chat = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <ChatUserList />
      </div>
      <div className="col-9 fh">
        <ViewTitle text={`Joined Channel ID: ${id}`} />
        <ChatMessagesList />
      </div>
    </div>
  );
}