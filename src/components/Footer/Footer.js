import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkItem>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:zihao.yin14@gmail.com'>Zihao.Yin14@gmail.com</LinkItem>
        </LinkItem>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
