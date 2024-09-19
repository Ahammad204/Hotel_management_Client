import React, { useEffect, useState } from "react";
import ChefRecommendCard from "./ChefRecommendCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ChefRecommend = () => {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const ChefRecommends = data.filter(
          (item) => item.ChefRecommend === true
        );
        setRecommend(ChefRecommends);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading="--- Should try ---"
        heading="Chef Recommend"
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-4">
        {recommend.map((item) => (
          <ChefRecommendCard item={item} key={item._id}></ChefRecommendCard>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommend;
