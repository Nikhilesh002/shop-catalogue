import RootLayout from "./components/RootLayout";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";
import ErrorPage from "./components/ErrorPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route path="" element={<Products />} />
          <Route path=":title" element={<ProductPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
