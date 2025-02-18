import { useState } from "react";
import { benefits } from "../constants"; // Use benefits array

import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Model from "./Model";

const Benefits = () => {
  const [showModel, setShowModel] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  const handleExploreMore = (benefitId) => {
    // Find the clicked benefit data from the 'benefits' array
    const benefitData = benefits.find(item => item.id === benefitId);
    if (benefitData) {
      setSelectedBenefit(benefitData); // Set the selected benefit data
      setShowModel(true); // Show the modal
    }
  };

  return (
    <Section id="features">
      <div className="container relative z-1">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Our Services"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto ">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    
                  />
                  {/* Pass the benefit id when clicking the button */}
                  <button
                    className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"
                    onClick={() => handleExploreMore(item.id)}
                  >
                    Explore more
                  </button>

                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 ">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>

      {/* Pass the selectedBenefit to Model */}
      <Model
        isVisible={showModel}
        handleClose={() => {
          setShowModel(false);
          setSelectedBenefit(null);
        }}
        data={selectedBenefit} // Pass selectedBenefit object
      />
    </Section>
  );
};

export default Benefits;
