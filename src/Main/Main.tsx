import "./Main.css";

import { Input } from "@nextui-org/react";
import { SearchIcon } from "../icons/icons";
import Board from "../Board/Board";
import Status from "../Status/Status";

function Main(props) {
  return (
    <div className='main'>
      <div className='head'>
        <div className='search'>
          <Input
            width='50%'
            placeholder='Search'
            color='secondary'
            contentLeft={<SearchIcon width='24' height='24' />}
          />
        </div>
      </div>
      <div className='mainBoard'>
        <Board />
        <Status />
      </div>
    </div>
  );
}

export default Main;
