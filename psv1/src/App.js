import { useState } from "react";
import "./App.css";
import Navbar from "./components/nav";
import MainPage from "./Main";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <Navbar setPage={setPage}></Navbar>
      <MainPage page={page} />
    </div>
  );
}

export default App;
