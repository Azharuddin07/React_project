import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Registration = () => {
    const[id,idchange] =useState("");
    const[name,namechange] =useState("");
    const[password,passwordchange] =useState("");
    const[email,emailchange] =useState("");
    const[phone,phonechange] =useState("");
    const[country,countrychange] =useState("");
    const[Address,Addresschange] =useState("");

    const navigate = useNavigate();

    
    const Isvalidate = ()=>{
        let isproceed =true;
        let errormessage = 'Please enter the value in '
        if(id === null || id === ''){
            isproceed = false;
            errormessage += 'Username';
        }
        if(name === null || name === ''){
            isproceed = false;
            errormessage += 'Username';
        }
        // Add for Remaining to validation   


        if(!isproceed){
            toast.warning(errormessage)
        }
        return isproceed
    }

    const handlesubmit =(event) =>{
        if(Isvalidate()){
        event.preventDefault();
        let regobj ={id,name,password,email,phone,country,Address};
    //    console.log(regobj);
    fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(regobj)
     })
     .then((res) => {
        if (res.ok) {
           toast.success('Registered Successfully.');
           navigate('/login')
        } else {
           throw new Error('Network response was not ok.');
        }
     })
     .catch((err) => {
        toast.error('Failed :' + err.message);
     });
    }
    }
    return (  
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                        <h1><p class="title">Registration</p></h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
          <div className="col-lg-6">
          <div className="form-group"> 
              <label>User Name<span className="errmsg">*</span></label>
              <input value={id} onChange={e=>idchange(e.target.value)} className="form-control" required></input>   
              </div>                          
              </div>
          <div className="col-lg-6">
          <div className="form-group"> 
              <label>Password<span className="errmsg">*</span></label>
              <input value={password} onChange={e=>passwordchange(e.target.value)} type="password" className="form-control" required></input>   
              </div>                          
              </div>
              <div className="col-lg-6">
              <div className="form-group"> 
              <label>Full Name<span className="errmsg">*</span></label>
              <input  value={name} onChange={e=>namechange(e.target.value)} className="form-control" required></input>   
              </div>                          
              </div>
              <div className="col-lg-6">
              <div className="form-group"> 
              <label>Email<span className="errmsg">*</span></label>
              <input  value={email} onChange={e=>emailchange(e.target.value)} className="form-control" required></input>   
              </div>                          
              </div>
              <div className="col-lg-6">
              <div className="form-group"> 
              <label>Phone Number<span className="errmsg">*</span></label>
              <input  value={phone} onChange={e=>phonechange(e.target.value)} className="form-control" required></input>   
              </div>                          
              </div>
              <div className="col-lg-6">
              <div className="form-group"> 
              <label>Country<span className="errmsg">*</span></label>
              <select  value={country} onChange={e=>countrychange(e.target.value)} className="form-control" required>
                <option value="indian">Indian</option>
                <option value="soudi">Soudi</option>
                <option value="dubai">Dubai</option>
                <option value="turkey">Turkey</option>
                <option value="iran">Iran</option>
                <option value ="Other">Other</option>             
              </select>
              </div>                          
              </div>
              <div className="col-lg-12">
              <div className="form-group"> 
              <label>Address<span className="errmsg">*</span></label>
              <textarea  value={Address} onChange={e=>Addresschange(e.target.value)} className="form-control" required></textarea>   
              </div>                          
              </div>
                            </div>
                            </div>
                            <div className="card-footer">
                            <div><button type="submit" className="btn btn-primary" >Register</button></div>
                            <div><Link to={'/'}className="btn btn-danger">Back</Link></div>
                            </div>
                    </div>
                </form>
            </div>
          
        </div>
    );
}
 
export default Registration;