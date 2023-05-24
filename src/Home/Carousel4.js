import React from 'react';

function Carousel4() {
    return (
        <div>
         <div className='packages'><h3 class="heading1">Famous Food</h3><br/>
          <h5 class="food">The Hyderabad Famous Food will be provided with in the package</h5>
          <h5>To know more About Famous Food tap on Famous Food at top Bar</h5></div>
<div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card">
      <img src="./Gallery/Hyderabadi Biryani.jpg" class="card-img-top" alt="..."/>
     
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Gallery/Hyderabadi Haleem.jpg" class="card-img-top" alt="..."/>
    
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Gallery/Keema Samosa.jpg" class="card-img-top" alt="..."/>
     
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Gallery/Nihari.jpg" class="card-img-top" alt="..."/>
    
    </div>
  </div></div>
    </div>
    <div class="carousel-item">
    <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col">
    <div class="card">
      <img src="./Gallery/Paya.jpg" class="card-img-top" alt="..."/>
    
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Gallery/Boti Kebab.jpg" class="card-img-top" alt="..."/>
    
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Gallery/Qubani Ka Meetha.jpg" class="card-img-top" alt="..."/>
   
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="./Gallery/Pathar Ka Ghost.jpg" class="card-img-top" alt="..."/>
     
    </div>
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Carousel4;
