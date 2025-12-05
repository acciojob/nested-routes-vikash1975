import React from "react";
import { Link } from "react-router-dom";

export default function Women() {
  return (
    <div>
      <h1>Women Items</h1>
      <ul>
        <li><Link to="/women/grooming">Grooming</Link></li>
        <li><Link to="/women/shirt">Shirt</Link></li>
        <li><Link to="/women/trouser">Trouser</Link></li>
        <li><Link to="/women/jewellery">Jewellery</Link></li>
      </ul>
    </div>
  );
}