import * as React from "react";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import ProductDetail from "./pages/ProductDetail";
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { deepOrange, lightBlue, pink } from "@material-ui/core/colors";
import SignUp from "./components/SignUp/SignUp";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#fafafa",
    },
  },
  typography: {
    fontSize: 12,
  },
});

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <SearchAppBar />
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/login" component={LogIn} />
              <Route path="/register" component={SignUp} />
              <Route path="/productDetail" component={ProductDetail} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;
