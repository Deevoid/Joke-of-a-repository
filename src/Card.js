import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-body">{props.cardBody}</div>
      <div className="card-footer">{props.cardFooter}</div>
    </div>
  );
}
