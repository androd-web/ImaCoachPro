 import React from "react";
import "./Budget.css";
import { iconsImgs } from "../../utils/images";
import { budget } from "../../data/data";

const Budget = () => {
  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Budget</h3>
        <button className="grid-c-title-icon" aria-label="Ajouter un budget">
          <img src={iconsImgs.plus} alt="Ajouter" />
        </button>
      </div>

      <div className="grid-c-top text-silver-v1">
        <h2 className="lg-value">Cash</h2>
        <span className="lg-value">$ 100,000</span>
      </div>

      <div className="grid-c4-content bg-jet">
        <div className="grid-items">
          {budget.map((item) => (
            <div className="grid-item" key={item.id}>
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.check} alt="Check icon" />
                </div>
                <p className="text text-silver-v1">
                  {item.title} <span>{item.type}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1">
                  $ {item.amount.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;
