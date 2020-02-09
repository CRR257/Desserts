import React from "react";

import "./Dessert.css";

const Dessert = props => {
  return (
    <ul className="desserts-container">
      {props.dessertsData.map(dessert => (
        <li className="dessert" key={dessert.id}>
          <img
            className="dessert-image"
            src={dessert.image}
            alt={dessert.title}
          />
          <div className="dessert-information">
            <span className="dessert-information__title">{dessert.title}</span>
            <span className="dessert-information__rate">
              Rate: {dessert.rate}
            </span>
            <div className="dessert-information__votes">
              <button onClick={props.onClickedHandler} value={dessert.id}>
                <i className="far fa-thumbs-up"></i>
                Add vote!
              </button>
              <button
                disabled={dessert.rate <= 0}
                onClick={props.onClickHandler}
                value={dessert.id}
              >
                <i className="far fa-thumbs-down"></i>
                Remove vote!
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Dessert;
