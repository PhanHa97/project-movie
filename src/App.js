import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from './containers/PageNotFound';
import { renderRoutesHome, renderRouteAdmin } from "./routes";
import Navbar from './containers/HomeTemplate/_component/Navbar';
import Sidebar from "./containers/AdminTemplate/component/navigate/sidebar"
function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Switch>
        {renderRoutesHome()}
        {renderRouteAdmin()}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
