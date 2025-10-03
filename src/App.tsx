import React from "react";
import "./styles/globals.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import QuickBooking from "./components/QuickBooking/QuickBooking";
import Gallery from "./components/Gallery/Gallery";
import MapSection from "./components/MapSection/MapSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <QuickBooking />
        <Gallery />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
