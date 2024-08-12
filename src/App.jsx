import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/navbar";
import Footer from "./pages/footer";
import Home from "./pages/home";
import Mahsulotlar from "./pages/mahsulotlar";
import Yangiliklar from "./pages/yangiliklar";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Mahsulotlar />
      <Footer />
    </div>
  );
}

export default App;
