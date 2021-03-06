import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import Home from './Components/Home/Home';
import AddItem from './Components/AddItem/AddItem';
import ManageItems from './Components/ManageItems/ManageItems';
import NotFound from './Components/NotFound/NotFound';
import MyItems from './Components/MyItems/MyItems';
import InventoryDetail from './Components/InventoryDetail/InventoryDetail';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Help from './Components/Help/Help';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/additems' element={<AddItem></AddItem>}></Route>
        <Route path='/manage' element={<ManageItems></ManageItems>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/help' element={<Help></Help>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
