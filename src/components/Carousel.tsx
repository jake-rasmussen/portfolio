import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { IconBrandAdobe, IconBrandBlender, IconBrandCSharp, IconBrandJavascript, IconBrandMongodb, IconBrandNextjs, IconBrandPrisma, IconBrandPython, IconBrandReact, IconBrandSwift, IconBrandTailwind, IconBrandTypescript, IconBrandUnity } from '@tabler/icons-react';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/react-splide/css';

const Carousel = () => {

  return (
    <>
      <Splide
        options={ 
          {
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
              speed: 1
            }
          } 
        }
        extensions={{ AutoScroll }}
        className="text-[#2C3542]"
    >
      <SplideSlide>
        <IconBrandAdobe className="w-44 h-44" />
      </SplideSlide>
      <SplideSlide>
        <IconBrandNextjs className="w-44 h-44" />
      </SplideSlide>
      <SplideSlide>
        <IconBrandJavascript className="w-44 h-44" />
      </SplideSlide>
      <SplideSlide>
        <IconBrandReact className="w-44 h-44" />
      </SplideSlide>
      <SplideSlide>
        <IconBrandSwift className="w-44 h-44" />
      </SplideSlide>
      <SplideSlide>
        <IconBrandTailwind className="w-44 h-44" />
      </SplideSlide>
      <SplideSlide>
        <IconBrandUnity className="w-44 h-44" />
      </SplideSlide>
      <SplideSlide>
        <IconBrandCSharp className="w-44 h-44" />
      </SplideSlide>
      <SplideSlide>
        <IconBrandMongodb className="w-44 h-44" />
      </SplideSlide>
      <SplideSlide>
        <IconBrandTypescript className="w-44 h-44" />
      </SplideSlide>
      <SplideSlide>
        <IconBrandPrisma className="w-44 h-44" />
      </SplideSlide>
      <SplideSlide>
        <IconBrandBlender className="w-44 h-44" />
      </SplideSlide>
      <SplideSlide>
        <IconBrandPython className="w-44 h-44" />
      </SplideSlide>
    </Splide>
    </>
  );

}

export default Carousel;