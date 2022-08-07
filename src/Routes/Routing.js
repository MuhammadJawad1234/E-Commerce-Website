import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from '../components/Home';
import Cart from '../components/Cart';
import Nav from '../components/Nav';

import Details from "../components/Details";
const Routing = () => {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>

    </BrowserRouter>
  );

}
export default Routing;