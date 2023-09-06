import { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import StateProvider from "./provider/StateProvider";

function App() {
  
  return (
    <StateProvider>
      <Navbar/>
      <Home/>
    </StateProvider>
  );
}

export default App;
