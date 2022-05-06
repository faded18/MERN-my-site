import React from "react";
import Navbar from "./Component/Navbar";
import Icon from "./Icon";
import { useState } from "react";
import "./Component/Slide";
import "./Ticket.css";
import react from "react";
import Slide from "./Component/Slide";
import { Footer } from "./Component/Footer";
// // import "./Component/Box
// import Calendar from 'react-calendar'
export const Ticket = () => {
  const [arry, setArr] = useState([]);

  let arr = [
    {
      from: "SELECT",
      dest: "SELECT DESTINATION",
      to: "SELECT",
      desti: "SELECT DESTINATION",
      Depart: "Number of people",
      traveller: "1 Traveller",
    },
  ];
  let count = 0;

  const clicked = () => {
    count++;
    if (count < 2) {
      setArr([...arry, arr]);
    }
  };

  return (
    <>
      <div className="end">
        <Navbar />
        <div className="tik-container">
          <div className="tik">
            <div className="div-inner">
              <div className="fonts-1">
                <i class="fa-solid fa-plane"></i>
              </div>
              <div className="fonts">
                <i class="fa-solid fa-car"></i>
              </div>

              <div className="fonts-3">
                <i class="fa-solid fa-hotel"></i>
              </div>
              <div className="fonts-4">
                <i class="fa-solid fa-burger"></i>
              </div>

              <div className="fonts-5">
                <i class="fa-solid fa-person-hiking"></i>
              </div>
              <div className="fonts-6">
                <i class="fa-solid fa-passport"></i>
              </div>
            </div>
            <div className="check">
              <input id="circle" type="checkbox" name="" />
              One Way
              <input id="circle" type="checkbox" name="" />
              Round Trip
              <input id="circle" type="checkbox" name="" />
              Multicity
            </div>

            <div className="cardy">
              <div className="ABD">
                <div className="Card-1">
                  <h3>From</h3>
                  <h2>Delhi</h2>
                  <h4>DEl,DElhi Airport India</h4>
                </div>
                <div className="Card-2">
                  <h3>To</h3>
                  <h2>Bangalore</h2>
                  <h4>Bangalore Airport India</h4>
                </div>
                <div className="Card-3">
                  <h3>Depart</h3>
                  <h2>Delhi</h2>
                  <h4>DEl,DElhi Airport India</h4>
                </div>
                <div className="Card-4">
                  <h3>Traveller</h3>
                  {/* <Calendar/> */}
                  <h2>Traveller</h2>
                </div>
              </div>

              {arry.map((item) => {
                return (
                  <div className="ABD">
                    <div className="Card-1">
                      <h3>{item[0].from}</h3>
                      <h2>{item[0].dest}</h2>
                      <h4>SELECT</h4>
                    </div>
                    <div className="Card-2">
                      <h3>{item[0].to}</h3>
                      <h2>{item[0].desti}</h2>
                      <h4>SELECT</h4>
                    </div>
                    <div className="Card-3">
                      <h3>{item[0].Depart}</h3>
                      <h2>SELECT</h2>
                      <h4>SELECT</h4>
                    </div>
                    <div className="Card-4">
                      <h3>Traveller</h3>
                      <h2>{item[0].traveller}</h2>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="btun" onClick={clicked}>
              {" "}
              Add Another
            </button>
          </div>
          
        </div>
        
        <div className="Slider">
          <Slide /></div>    
      </div>
      <Footer/>
    </>
    
  );
};
