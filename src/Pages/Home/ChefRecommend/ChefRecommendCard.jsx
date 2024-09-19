import React from "react";

const ChefRecommendCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  console.log(item);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn mt-4 text-[#BB8506] uppercase border-b-[#BB8506] hover:bg-[#1F2937] hover:border-b-none ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommendCard;
