import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Historicalplaces from './Pages/Historical-places';
import Famousfood from './Pages/Famous-food';
import Newcity from './Pages/New-city';
import Oldcity from './Pages/Old-city';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Booknow from './Pages/Booknow';
import Payment from './Pages/Payment';
import Userdata from './Pages/Userdata';

let username = sessionStorage.getItem('username')

function App() {
  return (
    <div className="App">
      <Navbar />
      <br/><br/><br/><br/><br/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Home' element={<Home />}/>
      <Route path='/Historical-places' element={<Historicalplaces />}/>
      <Route path='/Famous-food' element={<Famousfood />}/>
      <Route path='/New-city' element={<Newcity />}/>
      <Route path='/Old-city' element={<Oldcity />}/>
      { username !== null && <><Route path='/Booknow' element={<Booknow />}/></>}
      <Route path='/Login' element={<Login />}/>
      <Route path='/Registration' element={<Registration />}/>
      { username === 'Azhar' &&( <Route path='/Userdata' element={<Userdata />}/>)}
      { username !== null && <><Route path='/Payment' element={<Payment />}/></>}

    </Routes>
    </div>
   
  );
}

export default App;
