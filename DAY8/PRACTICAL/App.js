
import './App.css';
import CreateUI from './components/CreateUI';
import CreateUI2 from './components/CreateUI2';
import "bootstrap/dist/css/bootstrap.css";
import Employee from './components/Employee';
import StateDemo from './components/state/StateDemo';
import Profile from './components/state/Profile';
import Parent from './components/props/Parent';
import A from './components/propsdrilling/A';
import Parent1 from './components/contextapi/Parent1';
import Main from './components/condrendering/Main';
import User from './components/axios/User';
import UserInfo from './components/useeffect/UserInfo';
import Nav from './components/routing/Nav';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Electronics from './components/routing/Electronics';
import Product from './components/routing/Product';
import Jewellery from './components/routing/Jewellery';
import Retails from './components/routing/Retails';
import Garments from './components/routing/Garments';
import OrderReport from './components/bootreact/OrderReport';
import AddOrder from './components/bootreact/AddOrder';
function App() {
  return (
    <div className="App">
      <h2>REACT APPLICATION</h2>
       <Nav/>
      
       <Routes>
        <Route path="/state" element={<StateDemo/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/props" element={<Parent/>}/>
        <Route path="/propsdrilling" element={<A/>}/>
        <Route path="/context" element={<Parent1/>}/>
        <Route path="/condrend" element={<Main/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/userinfo" element={<UserInfo/>}/>
        <Route path="/orderreport" element={<OrderReport/>}/>
        <Route path="/addorder" element={<AddOrder/>}/>
        <Route path="/product" element={<Product/>}>
         <Route path="electronics" element={<Electronics/>}/>
         <Route path="jewellery" element={<Jewellery/>}/>
         <Route path="garments" element={<Garments/>}/>
         <Route path="retails" element={<Retails/>}/>
        </Route>
         </Routes>
    </div>
  );
}

export default App;
