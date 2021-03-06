import React from "react";

export default function ProductPromotions(props) {
  return <ul>{props.promos.map(promo => promoItem(promo))}</ul>;
}

function promoItem({ description, key }) {
  return (
    <li className="red" key={key}>
      {description}
    </li>
  );
}
