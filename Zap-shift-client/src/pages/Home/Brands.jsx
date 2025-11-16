import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from "../../assets/brands/amazon.png"
import img2 from "../../assets/brands/amazon_vector.png"
import img3 from "../../assets/brands/casio.png"
import img4 from "../../assets/brands/moonstar.png"
import img5 from "../../assets/brands/randstad.png"
import img6 from "../../assets/brands/star.png"
import img7 from "../../assets/brands/start_people.png"
const Brands = () => {
    return (
      <div>
        <h1 className='text-secondary text-center text-xl md:text-3xl py-9 font-bold'>We've helped thousands of sales teams</h1>
        <Marquee className="gap-4" direction="right" pauseOnHover>
          <img src={img1} alt="" style={{ marginRight: "60px" }} />
          <img src={img2} alt="" style={{ marginRight: "60px" }} />
          <img src={img3} alt="" style={{ marginRight: "60px" }} />
          <img src={img4} alt="" style={{ marginRight: "60px" }} />
          <img src={img5} alt="" style={{ marginRight: "30px" }} />
          <img src={img6} alt="" style={{ marginRight: "60px" }} />
          <img src={img7} alt="" style={{ marginRight: "60px" }} />
        </Marquee>
      </div>
    );
};

export default Brands;