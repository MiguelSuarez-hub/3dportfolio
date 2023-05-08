import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 flex flex-col justify-center items-center' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <h3>{technology.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");