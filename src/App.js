import { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import StateProvider from "./provider/StateProvider";
import Footer from "./components/Footer";

function App() {
  
  return (
    <StateProvider>
      <Navbar/>
      <Home/>
      <Footer/>
    </StateProvider>
  );
}

export default App;
