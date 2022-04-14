import React from "react";

import Dataanalist from "./Homepage/Dataanalist";
import About from "./Homepage/About";
import Herosection from "./Homepage/Herosection";
import Whynaatiq from "./Homepage/Whynaatiq";
import Facility from "./Homepage/Facility";
import Myprogram from "./Homepage/Myprogram";
import KeseruanBelajar from "./Homepage/KeseruanBelajar";
import Testimonial from "./Homepage/Testimonial";
import Footer from "../Components/Footer";
import Package from "./Homepage/Package";

const Home = () => {
  return (
    <div>
      <Herosection />
      <Dataanalist />
      <About />
      <Whynaatiq />
      <Facility />
      <Myprogram />
      <KeseruanBelajar />
      <Testimonial />
      <Package />
      <Footer />
    </div>
  );
};

export default Home;
