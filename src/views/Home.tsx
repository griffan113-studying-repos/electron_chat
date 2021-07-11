import { useEffect } from "react";

import { JoinedChats } from "../components/JoinedChats";
import { AvaliableChats } from "../components/AvaliableChats";
import { NameContainer } from "../components/NameContainer";
import { useDispatch, useSelector } from "react-redux";
import { fetchChats } from "../redux/actions/chats";
import { RootState } from "../redux/store";

export const Home = () => {
  const dispatch = useDispatch();
  const chats = useSelector<RootState>(({ chats }): RootState => chats?.items);

  console.log(chats);

  useEffect(() => {
    dispatch(fetchChats())
  }, [dispatch])

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