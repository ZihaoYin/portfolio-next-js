import React from 'react';

import { Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection,BGImage,Content } from './HeroStyles';
// import Image from 'next/image'


const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      {/* <BGImage>
          <Image 
            src='/images/Philosophy.jpg'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
          />
      </BGImage> */}

      {/* <Content> */}
        <SectionTitle main center>
          Hi there,<br/>
          I am Zihao Yin
        </SectionTitle>

        <SectionText>
          Building software to provide users a good experience
        </SectionText>

      {/* </Content> */}

    </LeftSection>

  </Section>
);

export default Hero;