import { Navbar } from "./pages/Navbar.jsx";
import { About } from "./pages/About.jsx";
import { Experience } from "./pages/Experience.jsx";
import { Education } from "./pages/Education.jsx";
import { Projects } from "./pages/Projects.jsx";
import { ConnectMe } from "./pages/ConnectMe.jsx";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Experience />
      <Education />
      <Projects />
      <ConnectMe />
    </>
  );
}

export default App;
