import React from "react";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto md:w-4/12 my-10 text-center">
      <p className="text-[#D99904] mb-2">{subHeading}</p>
      <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
