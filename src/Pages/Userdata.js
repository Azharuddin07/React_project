import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Userdata() {
    const [Users, setUsers] = useState(null)


    useEffect(()=>{
        fetch("http://localhost:8000/users").then((res)=>{
            return res.json();
        }).then((resp)=>{
            setUsers(resp);
        }).catch((err)=>{
            alert("Userdetails Failed due to : " + err.message)
        })
    },[]);

   
    const Remove=(id)=>{
        if(window.confirm("Do you to Remove")){
            fetch("http://localhost:8000/users/"+id,{
            method:"DELETE",
            }).then((res)=>{
            alert("Removed successfully..");
            window.location.reload();
            }).catch((err)=>{
            alert("Failed : " + err.message );
            });
        }
    }
    return(
        <>
        
        <table className="table table-dark table-hover">
        <thead><tr><td colSpan={'2'}></td><td colSpan={'4'}><center><h1 className='userdata'>User Details</h1></center></td>
        <td><Link className='btn btn-success' to={'/Registration'}>Add New (+)</Link></td>
        </tr><br/>
    
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Country</td>
                <td>Address</td>
                <td>Actions</td>
            </tr>
        </thead>
        <tbody>
            { Users && Users.map((Item)=> {return(<tr><td>{Item.id}</td>
                                                        <td>{Item.name}</td>
                                                        <td>{Item.email}</td>
                                                        <td>{Item.phone}</td>
                                                        <td>{Item.country}</td>
                                                        <td>{Item.Address}</td>
                                                        <td>
                                                           
                                                            <button onClick={()=>{Remove(Item.id)}} className='btn btn-danger'>remove</button></td>
                                                        </tr>)})}
        </tbody>
        </table>
    </>
    )
}
export default Userdata;