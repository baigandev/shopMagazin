
import './App.css';
import Header from "./component/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import Basket from "./component/Basket";
import Product from "./component/Product";
import Favorite from "./component/Favorite";
import ProductDetails from "./component/ProductDetails";

function App() {
  return (
      <div>
          <Header/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/basket" element={<Basket/>}/>
              <Route path="/product" element={<Product/>}/>
              <Route path="/favorite" element={<Favorite/>}/>
              <Route path="/product/details/:productId" element={<ProductDetails/>}/>
          </Routes>
      </div>
);
}

export default App;
