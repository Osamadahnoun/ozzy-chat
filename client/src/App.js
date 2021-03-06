import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/auth" component={HomePage} />
          <Route exact path="/chats" component={ChatPage} />
          <Route component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
