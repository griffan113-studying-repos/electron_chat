import { JoinedChats } from "../components/JoinedChats";
import { AvaliableChats } from "../components/AvaliableChats";
import { NameContainer } from "../components/NameContainer";

export const Home = () => {
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