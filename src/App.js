import "./App.scss";

//React Router Imports
import { Switch, Route } from "react-router-dom";

//Components Imports
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path={"/"} component={Home} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
