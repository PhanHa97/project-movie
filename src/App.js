import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from './containers/PageNotFound';
import { renderRoutesHome, renderRouteAdmin } from "./routes";
import Footer from './containers/HomeTemplate/_component/Footer';
function App() {
  return (
    <BrowserRouter >
      <Switch>
        {renderRoutesHome()}
        {renderRouteAdmin()}
        <Route path="" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
