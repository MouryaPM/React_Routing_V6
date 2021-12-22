import React, { Suspense } from "react";
import "./App.css";
import Welcome from "./Components/Pages/Welcome";
import { Route, Routes, Navigate } from "react-router-dom";
import MainHeader from "./Components/MainHeader/MainHeader";
import NotFound from "./Components/Pages/NotFound";
const Product = React.lazy(() => import("./Components/Pages/Product"));
const ProductDetails = React.lazy(() =>
  import("./Components/Pages/ProductDetails")
);
function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Suspense fallback={<p>Loading....</p>}>
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/welcome/*" element={<Welcome />}>
              <Route path="guest-user" element={<p>Welcome New User</p>} />
            </Route>
            <Route path="/products" element={<Product />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            {/* <Route path="*">
            <NotFound />
          </Route> */}
          </Routes>
        </Suspense>
      </main>
    </React.Fragment>
  );
}

export default App;
