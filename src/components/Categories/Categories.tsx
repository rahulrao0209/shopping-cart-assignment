import React from "react";
import type { Category } from "../../types/customTypes";
import categories from "../../server/categories/index.get.json";
import "./Categories.scss";

const createCategory = (category: Category, index: number) => { 
    return (
        <div key={category.id} className="category" style={index % 2 === 0 ? {flexDirection: "row-reverse"} : {flexDirection: "row"}}>
          <div className="category__image">
              <img src={category.imageUrl} alt={category.name}/>
          </div>
          <div className="category__details">
              <div className="category__title">{category.name}</div>
              <div className="category__desc">{category.description}</div>
              <button>Explore {category.name}</button>
          </div>
        </div>
    )
}

export const Categories = () => {
  return (
    <div className="categories">
      { categories.map((category: Category, index) => {
          return createCategory(category, index);
      })}
    </div>
  )
}