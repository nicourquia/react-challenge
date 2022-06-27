import React, { useState, useEffect } from "react";
import "./App.css";
import { setDefaultResultOrder } from "dns";
import UserData from "./components/UserData";
import SearchPost from "./components/SearchPost";

function App() {
  return (
    <div className="App">
      <h1>Blog</h1>
      <SearchPost></SearchPost>
      <UserData></UserData>
    </div>
  );
}

export default App;
