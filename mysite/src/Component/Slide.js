import React from "react";
import "./slide.css";
import { useState } from "react";
import { ImagesData } from "./ImagesData";
const Slide = () => {
  // let curr;
  const [curr, setChange] = useState(0);
  const length = ImagesData.length;
  // const curr=0;
  const prev = () => {
    setChange(curr === 0 ? 0 : curr - 1);
  };

  const next = () => {
    setChange(curr === length - 1 ? 0 : curr + 1);
  };

  // console.log(change)

  return (
    <>
      <div className="Q">
        <div className="cardA">
          <i class="fa-solid fa-circle-arrow-left" onClick={prev}></i>
          <i class="fa-solid fa-circle-arrow-right" onClick={next}></i>

         
            {ImagesData.map((item, index) => {
              return (
                <>
                  {index === curr && (
                    <>
                    {/* <div className="Outer"> */}
                        <div className="Aer">
                          <h1 className="Tslide">{item.title}</h1>
                        </div>
                        <div className="Aes">
                          <p className="Dslide">{item.Dscrption}</p>{" "}
                        </div>
                        {/* </div> */}
                        {/* <div className="Outer-1"> */}
                        <img
                          src={item.image}
                          alt="Travel"
                          className="imgSlide"
                        />
                           {/* </div> */}
                    </>
                  )}
                </>
              );

              /* index===curr && ( <h1 className='Tslide'>{item.title}</h1>
                <p className='Dslide'>{item.Dscrption}</p>
                <img src={item.image} alt="Travel" className='imgSlide' />) */
            })}
          
          {/* </section> */}
        </div>
      </div>
   </>
    
  );
  
};

export default Slide;

