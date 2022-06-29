import React, { useState, useEffect } from "react";
import "./App.css";
import { setDefaultResultOrder } from "dns";
import UserData from "./components/UserData";
import SearchPost from "./components/SearchPost";
import SearchComments from "./components/SearchComments";

function App() {
  return (
    <div className="App">
      <h1>Blog</h1>
      <SearchComments></SearchComments>
      <SearchPost></SearchPost>
      <UserData></UserData>
    </div>
  );
}

export default App;
