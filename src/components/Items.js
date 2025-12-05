import React from "react";
import { useParams } from "react-router-dom";

const itemsData = {
  grooming: ["Cream", "Perfume", "Facewash"],
  shirt: ["Casual Shirt", "Formal Shirt", "Party Shirt"],
  trouser: ["Jeans", "Cotton Trouser", "Formal Trouser"],
  jewellery: ["Necklace", "Earrings", "Bracelet"]
};

function Items() {
  const { subCategoryName } = useParams();
  const items = itemsData[subCategoryName];

  return (
    <div>
      <h4>Items under {subCategoryName.toUpperCase()}</h4>
      <ul>
        {items?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Items;