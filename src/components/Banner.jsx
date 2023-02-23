import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Banner() {
  return (
    <div>
      {/* // className "owl-theme" is optional */}
      <OwlCarousel items={1} className='owl-theme pc-view' loop margin={10} nav autoplay={true}
        autoplayTimeout={4000}
        autoplayHoverPause={true}>
        <div class='item banner pc-view'>

          <img
            src={`/assets/banner/b1.jpg`}
            srcSet={`/assets/banner/b1.jpg`}
            alt="Banner Image"
            width="100%"
            loading="lazy"
          />
        </div>
        <div class='item banner pc-view'>

          <img
            src={`/assets/banner/b2.jpg`}
            srcSet={`/assets/banner/b2.jpg`}
            alt="Banner Image"
            width="100%"
            loading="lazy"
          />
        </div>
       

      </OwlCarousel>
      <OwlCarousel items={1} className='owl-theme mobile-view' loop margin={10} nav autoplay={true}
        autoplayTimeout={4000}
        autoplayHoverPause={true}>
       
        <div class='item banner '>

          <img
            src={`/assets/banner/m1.jpeg`}
            srcSet={`/assets/banner/m1.jpeg`}
            alt="Banner Image"
            width="100%"
            loading="lazy"
          />
        </div>
        <div class='item banner '>

          <img
            src={`/assets/banner/m2.jpg`}
            srcSet={`/assets/banner/m2.jpg`}
            alt="Banner Image"
            width="100%"
            loading="lazy"
          />
        </div>

      </OwlCarousel>
    </div>
  )
}
