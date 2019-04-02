import * as React from 'react';
import './App.css';
import SearchAppBar from "./components/SearchAppBar";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import LogIn from "./components/LogIn";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {deepOrange, lightBlue} from "@material-ui/core/colors";
import SignUp from "./components/SignUp/SignUp";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue[300],
        },
        secondary: {
            main: deepOrange[300],
        }
    },
    typography: {
        fontSize: 12,

    }
});

class App extends React.Component {
    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    <div className="App">
                        <SearchAppBar/>
                        <Switch>
                            <Route exact path="/" component={Dashboard}/>
                            <Route path="/login" component={LogIn}/>
                            <Route path="/register" component={SignUp}/>
                            <Route path="/productDetail" component={ProductDetail}/>
                        </Switch>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

export default App;
