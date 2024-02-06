import { About } from "./pages/About.jsx";
import { Experience } from "./pages/Experience.jsx";
import { Education } from "./pages/Education.jsx";
import { Projects } from "./pages/Projects.jsx";
import { ConnectMe } from "./pages/ConnectMe.jsx";
import {Layout} from "./components";

function App() {
    return (
        <Layout>
            <About/>
            <Experience/>
            <Education/>
            <Projects/>
            <ConnectMe/>
        </Layout>
    );
}

export default App;
