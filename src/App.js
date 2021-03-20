import "./App.css";
import Accueil from "./pages/Accueil";
import Boutique from "./pages/Boutique";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    //set routes from accieil and boutique pages
    <Router>
      <div className="App">
        <Header />
        <div className="page">
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route exact path="/boutique" component={Boutique} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
