import React from "react";
import Product from "../../assets/Product";
import Item from "../Item/Item";
import "./Restaurant.css";
const Restaurant = () => {
  return (
    <>
      <div className="restaurant">
        <div className="head_text">
          <h2>Restaurants</h2>
          <p>A place to enjoy a food</p>
        </div>
        <div className="top_restaurant">
          {Product.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                rate={item.rate}
              />
            );
          })}{" "}
          */
        </div>
      </div>
    </>
  );
};

export default Restaurant;
