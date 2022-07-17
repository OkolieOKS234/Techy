import "./App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Firstsection from "./Firstsection";
import Secondsection from "./Secondsection";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
      <Firstsection />
      <Secondsection />
      <Footer />
    </div>
  );
}

export default App;
