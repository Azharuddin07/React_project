import React from 'react';
import Carousel1 from '../Home/Carousel1';
import Carousel2 from '../Home/Carousel2';
import Carousel3 from '../Home/Carousel3';
import Carousel4 from '../Home/Carousel4';

function Home() {
    return (
        <div className='container4'>
<div class="px-4 py-5 my-5 text-center">
  <b><h1 class="heading2">Hyderabad</h1></b>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4"><b>The name Hyderabad means "Haydar's city" or "lion city", from haydar 'lion' and ābād 'city', after Caliph Ali Ibn Abi Talib, also known as Haydar because of his lion-like valour in battle.

The city was originally called Bhagyanagar ("fortunate city" or "city of gardens"), and later acquired the name Hyderabad. The European travellers von Poser and Thévenot found both names in use in the 17th century.

One popular legend suggests that the founder of the city, Muhammad Quli Qutb Shah, named it Bhagya-nagar after Bhagmati, a local nautch (dancing) girl whom he married. She converted to Islam and adopted the title Hyder Mahal. The city would have been named Hyderabad in her honour.</b></p>
  </div>
</div>
<hr class="featurette-divider"/>
        <Carousel1 />
        <Carousel2 />
        <Carousel3 />
        <Carousel4 />
       </div>       
    )
}

export default Home;