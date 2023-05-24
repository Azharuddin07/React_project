import React from 'react';

function Carousel2() {
    return (
      <div>
        <hr class="featurette-divider"/>
        <div className='packages'><h3 class="heading1">Old City packages</h3><br/>
          <h5 className='packages1'><i class="fa-solid fa-bus-simple"></i> Travel in AC-Bus with the package of <h5 class="price">2500₹</h5></h5>
          <h5 className='packages1'><i class="fa-solid fa-bus"></i> Travel in Non-AC-Bus with the package of <h5 class="price">2000₹</h5></h5>
          <h5 className='packages1'><i class="fa-solid fa-van-shuttle"></i> Travel in Mini-Bus with the package of <h5 class="price">3000₹</h5></h5>
          <h5 className='packages1'><i class="fa-solid fa-car"></i> Travel in 7-Seater Car with the package of <h5 class="price">3500₹</h5></h5>
          <h5 className='packages1'><i class="fa-solid fa-car-side"></i> Travel in 4-Seater Car with the package of <h5 class="price">4000₹</h5></h5>
          <h5 class="food">The Hyderabad Famous Food will be provided with in the package</h5>
          <h5>To know more About Old City tap on Old City at top Bar</h5></div>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
<div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
<div class="card">
<img src="./Gallery/High-court.jpg" class="card-img-top" alt="..."/>

</div>
</div>
<div class="col">
<div class="card">
<img src="./Gallery/Assembly-Telangana.jpg" class="card-img-top" alt="..."/>

</div>
</div>

<div class="col">
<div class="card">
<img src="./Gallery/Zoological-Park.jpg" class="card-img-top" alt="..."/>

</div>
</div>
<div class="col">
<div class="card">
<img src="./Gallery/Necklace-Road.jpg" class="card-img-top" alt="..."/>

</div>
</div>
</div></div>

<div class="carousel-item">
<div class="row row-cols-1 row-cols-md-4 g-4">
<div class="col">
<div class="card">
<img src="./Gallery/charminar-shopping.jpg" class="card-img-top" alt="..."/>

</div>
</div>
<div class="col">
<div class="card">
<img src="./Gallery/Numaish Masnuāt-e-Mulki.jpg" class="card-img-top" alt="..."/>

</div>
</div>
<div class="col">
<div class="card">
<img src="./Gallery/purana-pul.jpg" class="card-img-top" alt="..."/>

</div>
</div>
<div class="col">
<div class="card">
<img src="./Gallery/Rajiv-gandi-international-stadium.jpg" class="card-img-top" alt="..."/>

</div>
</div>
</div>
</div></div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
<hr class="featurette-divider"/></div>
    )
}

export default Carousel2;
