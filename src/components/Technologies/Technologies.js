import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
        I've worked with a range of technologies in web dev.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>Front-End</ListContainer>
        <ListParagraph>
          Experience with <br />
          React.js, Next.js, js, Html, css
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>Back-End</ListContainer>
        <ListParagraph>
          Experience with <br />
          Node.js, express, MongoDB
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
