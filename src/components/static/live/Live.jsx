"use client";
// import Welcome from "../Welcome";
// import About from "../about/About";
import Landing from "./Landing";
import Footer from "./Footer";
// import GetInvolved from "./getInvolved/GetInvolved";
import FAQ from "./FAQ";
// import Boards from "./board/Boards";
// import Committees from "./Committees";
// import Judges from "./judges/Judges";
// import Sponsors from "./Sponsors";
// import Schedules from "./schedule/Schedules";
// import Tracks from "./tracks/Tracks";
const Live = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Landing />
      {/* <About />
      <Welcome />
      <Schedules />
      <GetInvolved />
      <Tracks />
      <Boards />
      <Committees />
      <Sponsors />
      <Judges /> */}
      <FAQ />
      <Footer />
    </div>
  );
};

export default Live;
