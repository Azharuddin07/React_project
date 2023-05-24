import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { toast } from "react-toastify";


const Payment= () => {

    const[Cardowner,Cardownerchange] =useState("");
    const[Cardnumber,Cardnumberchange] =useState("");
    const[Cvv,Cvvchange] =useState("");
    const[Expirydate,Expirydatechange] =useState("");
    let username = sessionStorage.getItem("username")

    const navigate = useNavigate();

    
    const Isvalidate = ()=>{
        let isproceed =true;
        let errormessage = 'Please enter the value in '
       
        if(Cardowner === null || Cardowner === ''){
            isproceed = false;
            errormessage += 'Username';
        }

        if( Cardnumber === null || Cardnumber === ''){
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
        let regobj ={username,Cardowner,Cardnumber,Cvv,Expirydate};
    //    console.log(regobj);
    fetch("http://localhost:8000/Payment/", {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(regobj)
     }).then((res) => {
        if (res.ok) {
           toast.success('Payment Done Successfully.');
           navigate('/')
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
    <p class="title1">Payment </p>
       
    <label>
            <input value={Cardowner} onChange={e=>Cardownerchange(e.target.value)} type="text" class="input" required/>
            <span>Card Owner</span>
    </label>

    <label>
            <input  value={Cardnumber} onChange={e=>Cardnumberchange(e.target.value)}type="text" class="input" required/>
            <span>Card Number</span>
    </label>

    <label>
            <input value={Cvv} onChange={e=>Cvvchange(e.target.value)}  type="text" class="input" required/>
            <span>CVV</span>
    </label>


    <label>
            <input value={Expirydate} onChange={e=>Expirydatechange(e.target.value)} type="Date" class="input" required/>
            <span>EXPIRY DATE</span>
    </label>

    <button class="submit">Submit</button>
   
</form>
        </div>
    )
}

export default Payment;
