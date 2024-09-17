import React from "react";

import bannerImg from "../../../assets/home/chef-service.jpg";

const SectionBanner = () => {
  return (
    <div
      className="hero min-h-screen-[700px] p-20"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay mt-32 mb-32  bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase font-Cinzel">Bistro Boss</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
