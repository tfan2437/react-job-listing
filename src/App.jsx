import "./App.css";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Navbar from "./components/Navbar";
import Testbar from "./components/Testbar";
import JobCards from "./components/JobCards";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      {/* <Testbar /> */}
      <Hero />
      <HomeCards />
      <JobCards />
    </div>
  );
}

export default App;
