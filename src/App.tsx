import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts";
import CheckInput from "./pages/CheckInput";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/check-input" element={<CheckInput />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
