import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from './containers/PageNotFound';
import { renderRoutesHome, renderRouteAdmin } from "./routes";

function App() {
  return (
    <BrowserRouter >
      <Switch>
        {renderRoutesHome()}
        {renderRouteAdmin()}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
