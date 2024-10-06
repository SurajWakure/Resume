import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import Skill from "./Components/Skills/Skill";
import Works from "./Components/Works/Works";



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skill/>
     <Works/>
    </div>
  );
}

export default App;
