import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { lightTheme } from "./theme";
import {ThemeProvider} from "styled-components";



ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
