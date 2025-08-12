import "./Faqcss.css";
import React from "react";

function Faqs() {
  return (
    <div className="faq accordion-container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            What makes Burger’s Point burgers special?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              At Burger’s Point, we use freshly baked buns, 100% premium meat patties, farm-fresh vegetables, and our signature sauces made in-house to give you the juiciest and most flavorful burger experience.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Do you offer vegetarian or vegan options?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
               Yes! We have a range of vegetarian burgers made with crispy veggie patties, grilled paneer, and even a vegan-friendly plant-based burger — all packed with flavor.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefive"
              aria-expanded="false"
              aria-controls="collapsefive"
            >
              Can I customize my burger?
            </button>
          </h2>
          <div
            id="collapsefive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Absolutely! From swapping patties to adding extra cheese, jalapeños, or double sauce, we let you build your burger exactly the way you love it.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefour"
              aria-expanded="false"
              aria-controls="collapsefour"
            >
            Do you offer home delivery?
            </button>
          </h2>
          <div
            id="collapsefour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
                Yes, we provide quick and safe home delivery across the city. You can order directly from our website or through our delivery partners like Swiggy and Zomato.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What safety measures do you follow in food preparation?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Hygiene is our top priority. Our staff follows strict sanitization protocols, wears gloves and masks during preparation, and ensures contactless packaging for your safety.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
