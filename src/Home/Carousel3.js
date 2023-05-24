import React from 'react';

function Carousel3() {
    return (
        <div>
          <div className='packages'><h3 class="heading1">New City packages</h3><br/>
          <h5 className='packages1'><i class="fa-solid fa-bus-simple"></i> Travel in AC-Bus with the package of <h5 class="price">2500₹</h5></h5>
          <h5 className='packages1'><i class="fa-solid fa-bus"></i> Travel in Non-AC-Bus with the package of <h5 class="price">2000₹</h5></h5>
          <h5 className='packages1'><i class="fa-solid fa-van-shuttle"></i> Travel in Mini-Bus with the package of <h5 class="price">3000₹</h5></h5>
          <h5 className='packages1'><i class="fa-solid fa-car"></i> Travel in 7-Seater Car with the package of <h5 class="price">3500₹</h5></h5>
          <h5 className='packages1'><i class="fa-solid fa-car-side"></i> Travel in 4-Seater Car with the package of <h5 class="price">4000₹</h5></h5>
          <h5 class="food">The Hyderabad Famous Food will be provided with in the package</h5>
          <h5>To know more About New City tap on New City at top Bar</h5></div>
<div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
      <img src="./Gallery/Telangana-secretariat.jpg" class="card-img-top" alt="..."/>
     
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Gallery/Durgam-Cheruvu.jpg" class="card-img-top" alt="..."/>
    
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Gallery/Outer-ring-road.jpg" class="card-img-top" alt="..."/>
    
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Gallery/Rajiv-Gandhi-International-Airport.jpg" class="card-img-top" alt="..."/>
     
    </div>
  </div></div>
    </div>
    <div class="carousel-item">
    <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
    <div class="card">
      <img src="./Gallery/T-hub.jpg" class="card-img-top" alt="..."/>
    
    </div>
  </div>
  <div class="col">
    <div class="card ">
      <img src="./Gallery/Metro.jpg" class="card-img-top" alt="..."/>
    
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Gallery/Ramoji-filmcity.jpg" class="card-img-top" alt="..."/>
    
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Gallery/NTR.jpg" class="card-img-top" alt="..."/>
    
    </div>
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div><br/><hr class="featurette-divider"/>
        </div>
    )
}

export default Carousel3;
