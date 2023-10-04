import ReactDOM from "react-dom/client";
import "./index.css";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  magicLink,
} from "@thirdweb-dev/react";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Mumbai } from "@thirdweb-dev/chains";

import "./fonts/Gilroy-Bold.ttf";
import "./fonts/Gilroy-ExtraBold.ttf";
import "./fonts/Gilroy-Light.ttf";
import "./fonts/Gilroy-Regular.ttf";
import "./fonts/Gilroy-SemiBold.ttf";

const customTheme = extendTheme({
  fonts: {
    body: "Gilroy-Bold, Gilroy-ExtraBold,Gilroy-Light,Gilroy-Regular,Gilroy-SemiBold, sans-serif",
    heading:
      "Gilroy-Bold, Gilroy-ExtraBold,Gilroy-Light,Gilroy-Regular,Gilroy-SemiBold, sans-serif",
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThirdwebProvider
    supportedWallets={[
      metamaskWallet(),
      coinbaseWallet(),
      walletConnect(),
      magicLink({
        apiKey: "pk_live_7EDD2EBA2B3CE931",
      }),
    ]}
    activeChain={Mumbai}
    clientId='2e560857c2ad4f8f5e75dbc3e11e3b5d'
  >
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </ThirdwebProvider>
);
