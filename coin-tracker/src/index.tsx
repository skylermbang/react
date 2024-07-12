import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";
import { QueryClient,QueryClientProvider } from "react-query";

const queryClinet = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClinet}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </QueryClientProvider>
   
  </React.StrictMode>,
  document.getElementById("root")
);