import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from './containers/PageNotFound';
import { renderRoutesHome } from "./routes";
import Navbar from './containers/HomeTemplate/_component/Navbar';
import Footer from './containers/HomeTemplate/_component/Footer';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Switch>
        {renderRoutesHome()}
        <Route path="" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
