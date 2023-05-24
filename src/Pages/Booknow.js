import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { toast } from "react-toastify";


const Booknow= () => {
    

    const[Fullname,Fullnamechange] =useState("");
    const[Mobilenumber,Mobilenumberchange] =useState("");
    const[Gmail,Gmailchange] =useState("");
    const[Fulladdress,Fulladdresschange] =useState("");
    const[Historical,Historicalchange] =useState("");
    const[Oldcity,Oldcitychange] =useState("");
    const[Newcity,Newcitychange] =useState("");
    const[Select,Selectchange] =useState("");
    let username = sessionStorage.getItem("username")

    const navigate = useNavigate();

    
    const Isvalidate = ()=>{
        let isproceed =true;
        let errormessage = 'Please enter the value in '
       
        if(Fullname === null || Fullname === ''){
            isproceed = false;
            errormessage += 'Username';
        }

        if( Mobilenumber === null || Mobilenumber === ''){
                isproceed = false;
                errormessage += 'Username';
            }
        //  Add for Remaining to validation   


       if(!isproceed){
           toast.warning(errormessage)
         }
       return isproceed
    }

    const handlesubmit =(event) =>{
        if(Isvalidate()){
        event.preventDefault();
        let regobj ={username,Fullname,Mobilenumber,Gmail,Fulladdress,Historical,Oldcity,Newcity,Select};
    //    console.log(regobj);
    fetch("http://localhost:8000/Booknow/", {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(regobj)
     }).then((res) => {
        if (res.ok) {
           toast.success('Registered Successfully.');
           navigate('/Payment')
        } else {
           throw new Error('Network response was not ok.');
        }
     }).catch((err) => {
        toast.error('Failed :' + err.message);
     });
    }
    }
    return (
        <div className='container5' onSubmit={handlesubmit}>
            <form class="form">
    <p class="title1">Book now </p>
       
    <label>
            <input value={Fullname} onChange={e=>Fullnamechange(e.target.value)} type="text" class="input" required/>
            <span>Full Name</span>
    </label>

    <label>
            <input  value={Mobilenumber} onChange={e=>Mobilenumberchange(e.target.value)}type="text" class="input" required/>
            <span>Mobile Number</span>
    </label>

    <label>
            <input value={Gmail} onChange={e=>Gmailchange(e.target.value)}  type="text" class="input" required/>
            <span>Gmail Id</span>
    </label>


    <label>
            <input value={Fulladdress} onChange={e=>Fulladdresschange(e.target.value)} type="text" class="input" required/>
            <span>Full Address</span>
    </label>
        
    <label><b>Select the Places:</b></label><div class="form-places" required>
        <div><label>Historical places<input value={Historical} onChange={e=>Historicalchange(e.target.checked)} required=""  type="checkbox" class="input" name=""/></label></div>
        <div><label>Old City<input value={Oldcity} onChange={e=>Oldcitychange(e.target.checked)} required="" type="checkbox"  class="input" name=""/></label></div>
        <div><label>New City<input value={Newcity} onChange={e=>Newcitychange(e.target.checked)} required="" type="checkbox"  class="input" name=""/></label></div></div>

        <label><b>Select the vehicle type:</b></label>
    <select value={Select} onChange={e=>Selectchange(e.target.value)} required>
        <option>Travel in AC-Bus</option>
        <option>Travel in Non-AC-Bus</option>
        <option>Travel in Mini-Bus</option>
        <option>Travel in 7-Seater Car</option>
        <option>Travel in 4-Seater Car</option>
    </select>

    <button class="submit">Submit</button>
   
</form>
        </div>
    )
}

export default Booknow;
