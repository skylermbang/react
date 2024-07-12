import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface RouterProps {
  toggleTheme: () => void;
}


const Router: React.FC<RouterProps> = ({ toggleTheme }) => {
  return (
    <BrowserRouter>
      <Switch>
        {/* //this is how you tell there is parameter */}
        <Route path="/:coinId">
          <Coin toggleTheme={toggleTheme} />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
