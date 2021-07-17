import { useEffect, FC } from "react";

import { JoinedChats } from "../components/JoinedChats";
import { AvaliableChats } from "../components/AvaliableChats";
import { NameContainer } from "../components/NameContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "../redux/actions/chats";
import { State } from "../redux/store";

export const Home: FC = () => {
  const dispatch = useDispatch();
  const chats = useSelector<State>(({ chats }) => chats.items);

  console.log(chats);

  useEffect(() => {
    dispatch(fetchChats())
  }, [dispatch])

  return (
    <div className="row no-gutters fh">
      <div className="col-3 fh">
        <JoinedChats chats={chats} />
      </div>
      <div className="col-9 fh">
        <NameContainer />
        <div className="container-fluid">
          <AvaliableChats chats={chats} />
        </div>
      </div>
    </div>
  )
}