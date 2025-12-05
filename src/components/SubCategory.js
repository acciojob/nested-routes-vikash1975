import React from "react";
import { Link, useParams } from "react-router-dom";

export default function SubCategory() {
  const { category } = useParams();

  return (
    <div>
      <h2>{category} Items</h2>

      <ul>
        <li><Link to={`/items/${category}/item
        
        Data`}>Item 1</Link></li>
        <li><Link to={`/items/${category}/`}>Item 2</Link></li>
      </ul>
    </div>
  );
}