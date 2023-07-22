import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";


function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Main />
        <Footer />
      </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
