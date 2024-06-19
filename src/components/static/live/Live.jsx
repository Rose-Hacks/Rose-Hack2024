"use client";
import About from "../about/About";
import Landing from "./Landing";
import Footer from "./Footer";
import FAQ from "./FAQ";
const Live = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Landing />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Live;
