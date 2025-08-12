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
 <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://source.unsplash.com/1600x600/?burger" className="d-block w-100" alt="Burger"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Fresh & Juicy Burgers</h5>
            <p>Taste the best burgers in town.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/1600x600/?fries" className="d-block w-100" alt="Fries"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Perfectly Crispy Fries</h5>
            <p>Golden and delicious.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://source.unsplash.com/1600x600/?milkshake" className="d-block w-100" alt="Milkshake"/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Refreshing Milkshakes</h5>
            <p>Cool down with our creamy shakes.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

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
