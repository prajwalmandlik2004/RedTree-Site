import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark, height, width } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        <div className="relative mx-auto hidden md:block md:w-1/2">
          <div className="mx-auto w-[160px] sm:w-[200px] md:w-[240px] lg:w-[150px] xl:w-[260px]">
            <Image
              src={image}
              alt={title}
              width={width}
              height={height}
              className="w-full h-auto dark:hidden"
            />
            <Image
              src={imageDark}
              alt={title}
              width={width}
              height={height}
              className="hidden w-full h-auto dark:block object-cover"
            />
          </div>
        </div>


      </div>
    </>
  );
};

export default FeaturesTabItem;
