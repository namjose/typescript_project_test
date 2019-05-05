import * as React from "react";
import "./App.css";
import { Provider } from "react-redux";
import SearchAppBar from "./components/SearchAppBar";
import Footer from "./components/Footer";
import Collection from "./components/Collection";
import Detail from "./components/Detail";
import LogIn from "./components/LogIn";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SignUp from "./components/SignUp/SignUp";
import Homepage from "./components/Homepage";
import Checkout from "./components/Checkout/Checkout";
import { connect } from "react-redux";
import store from "./store";
import { ApplicationState } from "./reducers";
import { AuthState } from "./types/types";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121"
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#b5b5b5"
    }
  },
  typography: {
    fontSize: 12,
    // fontFamily: `"Roboto Condensed", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif`,
    fontWeightMedium: "bold",
    fontWeightRegular: "bold",
    fontWeightLight: "normal"
  },
  overrides: {
    MuiButton: {
      root: {
        margin: "5px 5px",
        // borderRadius: "20px",
        padding: "10px 50px"
      },
      text: {
        padding: "5px 5px"
      }
    },
    MuiAppBar: {
      root: {}
    }
  }
});

class App extends React.Component {
  public render() {
    // const { isLogin } = store.getState().auth;
    // console.log(isLogin);
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Router>
                <SearchAppBar />
                <div className="App">
                  <Switch>
                    <Route
                      exact
                      path="/"
                      component={Homepage}
                      // render={() =>
                      //   isLogin ? <Homepage /> : <Redirect to="/login" />
                      // }
                    />
                    <Route path="/collections" component={Collection} />
                    <Route exact path="/products/:id" component={Detail} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/register" component={SignUp} />
                  </Switch>
                </div>
                <Footer />
              </Router>
            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

// const mapStateToProps = (state: ApplicationState) => ({
//   auth: state.auth
// });

export default App;
