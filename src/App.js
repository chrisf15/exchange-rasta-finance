import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/global/Header";
import Home from "./components/home/Homepage";
import Footer from "./components/global/Footer";
import Farms from "./components/farms/Farms";
function App() {
  return (
    <Router>
    <div className="bg-black font-roboto h-screen text-white">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/farms/:farm" component={Farms}></Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
