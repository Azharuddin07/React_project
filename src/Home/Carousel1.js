import React from 'react';

function Carousel1() {
    return (
        <div>
          <div className='packages'><h3 class="heading1">Historical Places packages</h3><br/>
          <h5 className='packages1'><i class="fa-solid fa-bus-simple"></i> Travel in AC-Bus with the package of <h5 class="price">3000₹</h5></h5>
          <h5 className='packages1'><i class="fa-solid fa-bus"></i> Travel in Non-AC-Bus with the package of <h5 class="price">2500₹</h5></h5>
          <h5 className='packages1'><i class="fa-solid fa-van-shuttle"></i> Travel in Mini-Bus with the package of <h5 class="price">3500₹</h5></h5>
          <h5 className='packages1'><i class="fa-solid fa-car"></i> Travel in 7-Seater Car with the package of <h5 class="price">4000₹</h5></h5>
          <h5 className='packages1'><i class="fa-solid fa-car-side"></i> Travel in 4-Seater Car with the package of <h5 class="price">4500₹</h5></h5>
          <h5 class="food">The Hyderabad Famous Food will be provided with in the package</h5>
          <h5>To know more About Historical Places tap on Historical Places at top Bar</h5></div>
          
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

        <div class="carousel-item active " data-bs-interval="1500">
        <div class="card-group ">
          
        <div class="card">
          <img src="./Gallery/Golconda-fort.jpg" class="card-img-top" alt="..."/>
          
        </div>
        <div class="card">
          <img src="./Gallery/Charminar.jpg" class="card-img-top" alt="..."/>
          
        </div>
        <div class="card">
          <img src="./Gallery/Qutub-shahi-tombs.jpg" class="card-img-top" alt="..."/>
         
        </div>
        <div class="card">
    <img src="./Gallery/Mecca-masjid.jpg" class="card-img-top" alt="..."/>
    
  </div></div></div>

        <div class="carousel-item" data-bs-interval="1500">
         <div class="card-group ">

  <div class="card">
    <img src="./Gallery/chowmahalla-palace.jpg" class="card-img-top" alt="..."/>
    
  </div>
  <div class="card">
    <img src="./Gallery/Salar-Jung-Museum.jpg" class="card-img-top" alt="..."/>
    
  </div>
  <div class="card">
    <img src="./Gallery/taramati-baradari.jpg" class="card-img-top" alt="..."/>
    
  </div>
  <div class="card">
    <img src="./Gallery/Toli_Masjid.jpg" class="card-img-top" alt="..."/>
   
  </div></div></div>
       
  <div class="carousel-item" data-bs-interval="1500">
    <div class="card-group ">

  <div class="card">
    <img src="./Gallery/Paigah-tombs.jpg" class="card-img-top" alt="..."/>
    
  </div>
  <div class="card">
    <img src="./Gallery/Hussain_sagar.jpg" class="card-img-top" alt="..."/>
    
  </div>
  <div class="card">
    <img src="./Gallery/Taj_Falaknuma_Palace.jpg" class="card-img-top" alt="..."/>
    
  </div>
  <div class="card">
    <img src="./Gallery/spanish-mosque.jpg" class="card-img-top" alt="..."/>
    
  </div></div></div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
          </div>
          </div><br/>

          </div>
    )
}
export default Carousel1;