import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Nav from './components/Nav';
import AddFood from './components/AddFood';
import DeleteFood from './components/DeleteFood';
import UpdateFood from './components/UpdateFood';
import Food from './components/Food';
import FoodReport from './components/FoodReport';
import SearchFood from './components/SearchFood';
function App() {
  return (
    <div className="App">
      <h2>FOOD APP</h2>
      <Nav/>
      <Routes>
       
        <Route path="/food" element={<Food/>}>
         <Route path="addfood" element={<AddFood/>}/>
         <Route path="viewfood" element={<FoodReport/>}/>
         <Route path="updatefood" element={<UpdateFood/>}/>
         <Route path="searchfood" element={<SearchFood/>}/>
         <Route path="deletefood" element={<DeleteFood/>}/>
        </Route>
       
         </Routes>
    </div>
  );
}

export default App;
