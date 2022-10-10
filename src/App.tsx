import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Test from "./components/MDEditor";
import MDEditor from "./components/MDEditor";

function App() {
  return (
    <MDEditor></MDEditor>
  );
}

export default App;
