import "./App.css";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Navbar from "./components/Navbar";
import Testbar from "./components/Testbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <Testbar /> */}
      <Hero />
      <HomeCards />
    </>
  );
}

export default App;
