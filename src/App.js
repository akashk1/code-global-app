import React, { useState } from "react";
import Users from "./components/Users/Users";
import LeftPane from "./components/LeftPane/LeftPane";
import "./App.css";
import Header from "./components/Header/Header";
function App() {
  const [selected, setSelected] = useState([]);
  const handleSelected = (data) => {
    setSelected(data);
  };
  return (
    <div>
      <div>
        <LeftPane selectedUsers={selected} />
      </div>
      <div>
        <Header />
        <Users getSelected={handleSelected} />
      </div>
    </div>
  );
}

export default App;
