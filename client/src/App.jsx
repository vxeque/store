import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Store } from "./pages/Store";
import { Navigation } from "./components/Navigation";
import { Products } from "./pages/Products";
import { Sale } from "./pages/Sale";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/store" />} />
          <Route path="/store" element={<Store />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/sale/" element={<Sale />} />
        </Routes>
        <Toaster></Toaster>
      </div>
    </BrowserRouter>
  );
}

export default App;
