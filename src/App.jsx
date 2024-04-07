import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { StarsCanvas } from "./components/canvas";
import Contact from "./components/Contact";
import About from "./components/About"
import Experience from "./components/Experience"
import Tech from "./components/Tech"
import Works from "./components/Works"
import Feedbacks from "./components/Feedbacks"


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/> 
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
