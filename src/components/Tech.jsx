import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='bg-tertiary w-40 h-60 rounded-md flex flex-col justify-center items-center shadow hover:shadow-[0_4px_16px_rgba(49,138,172,1)] transition ease-linear delay-200' key={technology.name}>
          <img src={technology.icon} alt='tech stack' className="w-28"/>
          <h3 className="text-white text-[20px] font-bold text-center pt-1">{technology.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");