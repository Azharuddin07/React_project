import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

let username = sessionStorage.getItem('username')

function Navbar() {
  const navigate = useNavigate();
  const logout =()=>{
    sessionStorage.clear();
    navigate('/');
    window.location.reload();
  } 
 
    return (
        <div className='container-fluid1'>
        
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link  className="navbar-brand" to="#">Hyderabad Tourism</Link>  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-md-center" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link  className="nav-link active" to="/Home">Home</Link> 
        {username ===null && <> <Link  className="nav-link active" to="/Historical-places">Historical places</Link></>}
        {username ===null && <> <Link  className="nav-link active" to="/Old-city">Oldcity</Link></>}
        {username ===null && <> <Link  className="nav-link active" to="/New-city">Newcity</Link></>}
        {username ===null && <> <Link  className="nav-link active" to="/Famous-food">Famous food</Link></>}
        {username !== null && <><Link  className="nav-link active" to="/Booknow">Booknow</Link> </>}
        {username === 'Azhar' && <><Link  className="nav-link active" to="/Userdata">Userdata</Link></>}
        {username ===null && <> <Link  className="nav-link active" to="/Login">Login</Link></>}
        {username !== null && <><div class="dropdown">
          <button class="btn btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {<>User : {username}</>}
          </button>
          <ul class="bg-white dropdown-menu">
          <b>{username !== null && <Link className='nav-link active' onClick={logout}>Log Out</Link>}</b> 
          </ul>
          </div></>}
      </div>
    </div>
    <img src="./Gallery/hyderabad-tourism-bus.jpg" class="img1" alt="..."/>
  </div>
</nav>

<marquee>Hyderabad Tourism: Golconda Fort, Charminar, Qutub Shahi Tombs, Mecca Masjid, Chowmahalla Palace, Salar Jung Museum, Taramati Baradari, ToliMasjid, Paigah Tombs, Hussain Sagar, Taj Falaknuma Palace, Spanish Mosque, High Court Of TS, Telangana Assembly, Nehru Zoological Park, Necklace Road, Charminar Shopping, Numaish Masnuāt-e-Mulki, Purana Pul, Rajivgandi International Stadium, Telangana Secretariat, Durgam Cheruvu, Outer Ring Road, Rajiv Gandhi International Airport, T-Hub (Technology Hub), Hyderabad Metro, Ramoji Film City, NTR Gardens, Hyderabadi Biryani, Hyderabadi Haleem, Keema Samosa, Nihari, Paya, Boti Kebab, Qubani Ka Meetha, Pathar Ka Ghost.</marquee> 

        </div>
    )
}

export default Navbar;