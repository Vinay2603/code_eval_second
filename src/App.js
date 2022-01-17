import './App.css';
import { Navbar } from './component/Navbar';
import {Home } from "./component/Home"
import { Admin } from './component/Admin';
import { Applyjob } from './component/Applyjob';
import { Login } from './component/Login';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
       <Navbar/>
<Routes>
      <Route path="/" element={ <Home/>} ></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route  path="/Applyjob" element={ <Applyjob/>}></Route>
      <Route path="/Login"  element={ <Login/>}></Route>
</Routes>
      

       
      
      
    </div>
  );
}

export default App;
