import "./Main.css";

import Board from "../Board/Board";

function Main(props) {
  return (
    <div className='main'>
      <div className='head'></div>
      <Board />
      <div className='status'></div>
    </div>
  );
}

export default Main;
