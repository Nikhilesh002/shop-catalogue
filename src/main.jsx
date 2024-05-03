import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProductsStore from "./contexts/ProductsStore";

import App from "./App.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ProductsStore>
      <App />
    </ProductsStore>
  </StrictMode>
);
