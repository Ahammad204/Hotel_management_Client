import React from "react";

const MenuItem = ({item}) => {
  const { name, image, price, recipe } = item;
  console.log(name)
  return (
  <div className="flex space-x-4">
    <img className="w-[120px]" src={image} alt="" />
    <div>
        <h3 className="uppercase">{name} ---------</h3>
        <p>{recipe}</p>
    </div>
    <p className="text-[#BB8506]">${price}</p>
  </div>

  );
};

export default MenuItem;
