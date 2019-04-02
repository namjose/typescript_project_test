import * as React from 'react';
import './App.css';
import SearchAppBar from "./components/SearchAppBar";
import Dashboard from "./pages/Dashboard";
import LogIn from "./components/LogIn";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className="App">
                    <SearchAppBar/>
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/login" component={LogIn} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
