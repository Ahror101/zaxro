import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Rooms from "./pages/rooms";
import Restarand from "./pages/restarand";
import Holl from "./pages/holl";
import Contact from "./pages/contact";
import Footer from "./pages/footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Rooms/>
      <Restarand/>
      <Holl/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
