import { Fragment } from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../components/navbar/Navbar";
import Teachers from "../components/teachers/Teachers";
import Footer from "../components/footer/Footer";
import Students from "../components/students/Students";

function HomePage() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <Hero id="home" />
        <Students />
        <Teachers id="teachers" />
      </main>
      <Footer id="footer" />
    </Fragment>
  );
}

export default HomePage;