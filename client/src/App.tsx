import * as React from "react";
import "./App.css";
import SearchAppBar from "./components/SearchAppBar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Detail from "./components/Detail";
import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { deepOrange, lightBlue, pink } from "@material-ui/core/colors";
import SignUp from "./components/SignUp/SignUp";
import Homepage from "./components/Homepage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff8096"
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#b5b5b5"
    }
  },
  typography: {
    fontSize: 12,
    fontWeightMedium: "bold"
  },
  overrides: {
    MuiButton: {
      root: {
        margin: "5px 5px",
        borderRadius: "20px",
        padding: "10px 50px"
      },
      text: {
        padding: "5px 5px"
      }
    },
    MuiAppBar: {
      root: {
        backgroundImage:
          "linear-gradient(to left bottom, #5217ef, #671ced, #7822ea, #8629e8, #9330e6, #a633df, #b738d8, #c43fd2, #d648c6, #e454bc, #ee63b4, #f472ae)"
      }
    }
  }
});

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <SearchAppBar />
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/shop" component={Dashboard} />
              <Route path="/login" component={LogIn} />
              <Route path="/register" component={SignUp} />
              <Route path="/details/:id" component={Detail} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </MuiThemeProvider>
    );
  }
}
export default App;
