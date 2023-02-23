import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Banner from './components/Banner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import ProductView from './components/ProductView';
import Cart from './components/Cart';
import { useParams } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Userprofile from './components/Userprofile';
import Thankyou from './components/Thankyou';
function App(props) {
  let { productid } = useParams();
  const [count, setCount] = useState(0)
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>

        <Route path="/products" element={<Products />} />
        {/* <Route path="/products/:categoryss" element={<Products cats={props.datas}/>} /> */}
        <Route path="/product/:productId" element={<ProductView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/user" element={<Userprofile />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer/>
      </Router>
     
    </div>
    // <Router>

    // </Router>

  )
}

export default App
