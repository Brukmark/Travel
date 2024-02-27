import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out this epic destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
            <Carditem
              src="/images/img-9.jpg"
              text="Explore the hidden water fall deep inside the amazon jungle"
              label="adventure"
              path="/services"
            />
            <Carditem
              src="/images/img-2.jpg"
              text="Explore the mesmorizing valley of bali through cruises"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__item">
            <Carditem
              src="/images/img-3.jpg"
              text="Explore the Sea in our exclusive yacht in montenegro"
              label="Explore"
              path="/services"
            />
            <Carditem
              src="/images/img-4.jpg"
              text="A football field in the middle of nowhere? this is UAE"
              label="Fun"
              path="/services"
            />
            <Carditem
              src="/images/img-5.jpg"
              text="The new york night life experience inDubai"
              label="BAR"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
