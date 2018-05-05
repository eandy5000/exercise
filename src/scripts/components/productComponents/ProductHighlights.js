import React from "react";

export default function ProductHighlights(props) {
  return (
    <div>
      <h3>Product Highlights</h3>
      <ul>
        {props.list.map((item, key) => {
          return <li key={key} dangerouslySetInnerHTML={{ __html: item }} />;
        })}
      </ul>
    </div>
  );
}
