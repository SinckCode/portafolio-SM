import React, { useRef, useState } from 'react';
import './Imagenes.css'

import AVTR1 from '../../assets/imagenes/image1.png'
import AVTR2 from '../../assets/imagenes/image2.png'
import AVTR3 from '../../assets/imagenes/image3.png'
import AVTR4 from '../../assets/imagenes/image4.png'
import AVTR5 from '../../assets/imagenes/image5.png'
import AVTR6 from '../../assets/imagenes/image6.png'
import AVTR7 from '../../assets/imagenes/image7.png'



function Imagenes() {
  return (
    <div>
      <br /><br /><br /><br />

    <div class="image-grid">
		<img src={AVTR1} alt="architecture"/>
		<img src={AVTR2} alt="architecture"/>
		<img src={AVTR4} alt="architecture"/>
        <img src={AVTR5} alt="architecture"/>
		<img src={AVTR6} alt="architecture"/>
		<img src={AVTR7} alt="architecture"/>
	</div>
    </div>

    
  )
}

export default Imagenes
