import logo from './logo.svg';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Login from './pages/login/Login'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


function App() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser?.isAdmin) navigate('/login')
  }, [])

  if (!currentUser?.isAdmin) return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
  else return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          {/* <Route path="/newproduct" element={<NewProduct />} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App;
