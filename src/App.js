import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from './containers/PageNotFound';
import { renderRoutesHome } from "./routes";
import Navbar from './containers/HomeTemplate/_component/Navbar';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Switch>
        {renderRoutesHome()}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
