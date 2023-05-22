import { useState } from "react";
import "./App.css";

import SideBar from "./SideBar/SideBar";
import Main from "./Main/Main";
import Header from "./Header/Header";

function App() {
  return (
    <div className='App'>
      <SideBar></SideBar>
      <Main></Main>
    </div>
  );
}

export default App;
