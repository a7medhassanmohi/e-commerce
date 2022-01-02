import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './pages/navbar/Navbar';
import Sidenav from './pages/navbar/Sidenav';
import Cart from "./pages/cart/Cart";
import ProductinfoHome from "./pages/productInfo/ProductinfoHome";
import Home from "./pages/home/Home.jsx";
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Products from "./pages/Products/Products";
import { getCatgeoryProduct } from "./redux/actions/product.action";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { useNavigate } from "react-router-dom";
import Sucess from "./pages/Sucess/Sucess";
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Islogin } from "./redux/actions/auth.action";
toast.configure()

function App() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);


  const [item2, setitem2] = useState([])


  let media_query = 'screen and (max-width:700px)';
  let matched = window.matchMedia(media_query);
  const [media, setmedia] = useState(matched.matches)
  useEffect(() => {
    matched.addEventListener("change", () => {
      if (matched.matches) {
        setmedia(true)

      } else {
        setmedia(false)


      }
    })
  }, [media])
  useEffect(() => {
    dispatch(getCatgeoryProduct(setitem2));



  }, []);

  useEffect(() => {
    if (!auth.authanticate) {

      dispatch(Islogin(toast))
    }
  }, [auth.authanticate])

  return (
    <div className="App" >

      {media ? <Sidenav /> : <Navbar />}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sucess" element={<Sucess />} />
        <Route path="/productinfo" element={
          <ProductinfoHome />} />
        <Route path="/products" element={
          <Products item2={item2} setitem2={setitem2} />} />
        <Route path="/item/:id" element={<ProductinfoHome />} />
        <Route path="/login" element={auth.authanticate ? <Navigate to="/" replace={true} /> : <Login />} />
        <Route path="/signup" element={auth.authanticate ? <Navigate to="/" replace={true} /> : <Signup />} />
        <Route path="/*" element={
          <h1>no page like that</h1>} />
      </Routes>

    </div>
  );
}

export default App;
