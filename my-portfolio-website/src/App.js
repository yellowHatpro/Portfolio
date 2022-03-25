import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

//Components
import Main from "./components/Main"
import AboutPage from "./components/AboutPage"
import WorkPage from "./components/WorkPage"
import MySkillsPage from "./components/MySkillsPage"


function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/work" component={WorkPage} />
      <Route exact path="/skills" component={MySkillsPage} />
    </Switch>
    </ThemeProvider>
    </>
    
}

export default App

