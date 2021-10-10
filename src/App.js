import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Menu from "./components/Menu";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch> 
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
