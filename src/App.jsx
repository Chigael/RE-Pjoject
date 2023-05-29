import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Partners from "./components/Partners/Partners";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>

      <Partners />
      <Residencies />
      <Value />
      <Contact />
    </div>
  );
}

export default App;
