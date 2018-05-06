import React from "react";

export default function ProductAddButtons(props) {
  let online = props.inventoryStatus === "Online";
  return (
    <div>
      <button
        className={`ttu f6 link dim ph3 pv2 mb2 dib white bg-black br2 ${
          !props.instorePickup ? "disabled" : ""
        }`}
        disabled={props.instorePickup}
      >
        pick up in store
      </button>
      <button
        className={`ttu f6 link dim ph3 pv2 mb2 dib white bg-red br2 ${
          !online ? "disabled" : ""
        }`}
        onClick={() => props.addToCart()}
        disabled={!online}
      >
        add to cart
      </button>
    </div>
  );
}
