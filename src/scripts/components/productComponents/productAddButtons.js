import React from "react";

export default function ProductAddButtons(props) {
  return (
    <div>
      <button className="ttu f6 link dim ph3 pv2 mb2 dib white bg-black br2">
        pick up in store
      </button>
      <button className="ttu f6 link dim ph3 pv2 mb2 dib white bg-red br2">
        add to cart
      </button>
    </div>
  );
}
