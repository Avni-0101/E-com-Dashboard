import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';
import Update from './Components/Update';
import Profile from './Components/Profile';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent/>}>       {/* PROTECTED ROUTES */}
            <Route path='/' element={<ProductList/>} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='/update/:id' element={<UpdateProduct/>} />       {/* id is passed as a param */}
            <Route path='/update' element={<Update/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/logout' element={<h1>Logout</h1>} />
          </Route>

          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
