import React from 'react';
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroButton } from './Hero.elements.js';

const Hero = ( {title, text} ) => {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <HeroH1>
            {title}
          </HeroH1>
          <HeroP>
            {text}
          </HeroP>
          <HeroButton normal="normal" big="big">
            ORDER NOW
          </HeroButton>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default Hero;
