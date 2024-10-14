import "./App.css";
import AboutUs from "./components/About";
import SliderThumbnail from "./components/Slider";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

function App() {
  return (
    <>
      <Header />
      <SliderThumbnail />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
