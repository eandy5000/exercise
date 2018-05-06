import React from "react";

export default function ProductQuantityButtons({ quantity, changeFunction }) {
  return (
    <div className="dib br1 ba b--light-silver pa1 mv2">
      quantity:
      <button className="mh2" onClick={() => changeFunction(1)}>
        +
      </button>
      {quantity}
      <button className="mh2" onClick={() => changeFunction(-1)}>
        -
      </button>
    </div>
  );
}
