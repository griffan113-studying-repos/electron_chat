import { useEffect } from "react";

import { JoinedChats } from "../components/JoinedChats";
import { AvaliableChats } from "../components/AvaliableChats";
import { NameContainer } from "../components/NameContainer";
import { useDispatch } from "react-redux";
import { fetchChats } from "../redux/actions/chats";

export const Home = () => {
  const dispatch = useDispatch();

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