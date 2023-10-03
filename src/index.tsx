import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThirdwebProvider
    activeChain='mumbai'
    clientId='d38b143999d55489e793aff9232ba2c9'
  >
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </ThirdwebProvider>
);
