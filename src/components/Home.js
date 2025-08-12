import React from "react";
import restro from "./restro.jpeg";
import discount from "./discount.png";
import bur from "./bur1.png";
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
  return (
    <div>
          <div className="home overlay">
        <div className="para hero-section">
          <div className="para1 hero-text">
            <strong> Welcome to Burger's Point </strong>Where Every Bite Tells a
            Story At Burger's Point, we pride ourselves on serving premium
            quality food that delights every taste bud. Our burgers are crafted
            using the freshest ingredients — farm-fresh vegetables, juicy,
            perfectly seasoned patties, and soft, toasted buns. Every order is
            prepared fresh to ensure maximum flavor and satisfaction. Whether
            you're craving a classic cheeseburger
          </div>
          <div className="img img-cn hero-image">
            <img src={bur} alt="img-burger" height="300vh" width="400vw" />
          </div>
        </div>
              
        <div className="para flex">
          <div className="img1 img-cn">
            <img
              src={restro}
              alt="img-restaurant"
              height="300vh"
              width="400vw"
            />
          </div>
          <div className="para2 ">
            <strong> Celebrate with Us </strong>Perfect Spot for Parties and
            Good Times Looking for a fun, cozy, and vibrant place to celebrate
            birthdays, small parties, or casual hangouts? Burger's Point offers
            a welcoming environment with modern decor, ambient lighting, and
            comfortable seating. Our party arrangements include customizable
            packages, decorations, music, and special group menus
          </div>
        </div>

        <div className="para ">
          <div className="img img-cn">
            <img
              src={discount}
              alt="img-discount"
              height="300vh"
              width="400vw"
            />
          </div>  
          <div className="para3">
            <strong> Save More, Enjoy More </strong> Coupons, Offers & First
            Order Discount We believe that delicious food should come with
            delicious deals! At Burger's Point, new customers get an exclusive
            25% discount on their first order — just a small way of saying
            welcome to the family! Keep an eye out for our seasonal coupons.
          </div>
        </div>
      </div>
    </div>
  );
}


