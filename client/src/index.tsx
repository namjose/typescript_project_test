import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
require("dotenv").config();

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
