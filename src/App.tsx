import { useState } from "react";
import "./App.css";

import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";

function App() {
  return (
    <div className='App'>
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
