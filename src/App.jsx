import { useState } from "react";

import "./App.css";
import MainView from "../Components/MainView";
import AboutService from "../Components/AboutService";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

function App() {
  return (
    <>
      <MainView />
      <AboutService />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
