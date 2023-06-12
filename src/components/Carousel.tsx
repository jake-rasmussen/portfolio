import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  IconBrandAdobe,
  IconBrandBlender,
  IconBrandCSharp,
  IconBrandJavascript,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandPrisma,
  IconBrandPython,
  IconBrandReact,
  IconBrandSwift,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandUnity,
} from "@tabler/icons-react";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/react-splide/css";

const Carousel = () => {
  return (
    <>
      <Splide
        options={{
          type: "loop",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: 8,
          autoWidth: true,
          gap: "40px",
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
        className="text-[#2C3542]"
      >
        <SplideSlide>
          <IconBrandAdobe className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandNextjs className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandJavascript className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandReact className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandSwift className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandTailwind className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandUnity className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandCSharp className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandMongodb className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandTypescript className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandPrisma className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandBlender className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandPython className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandAdobe className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandNextjs className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandJavascript className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandReact className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandSwift className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandTailwind className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandUnity className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandCSharp className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandMongodb className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandTypescript className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandPrisma className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandBlender className="h-44 w-44" />
        </SplideSlide>
        <SplideSlide>
          <IconBrandPython className="h-44 w-44" />
        </SplideSlide>
      </Splide>
    </>
  );
};

export default Carousel;
