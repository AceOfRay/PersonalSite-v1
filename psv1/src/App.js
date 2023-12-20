import { useState } from "react";
import "./App.css";
import Navbar from "./components/nav";
import MainPage from "./Main";
import Socials from "./components/socials";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <Navbar className="navbar" setPage={setPage}></Navbar>
      <MainPage page={page} />
      <Socials></Socials>
    </div>
  );
}

export default App;
