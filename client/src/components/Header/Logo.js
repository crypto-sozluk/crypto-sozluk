import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { headerItem } from '../shared/helpers';

const Logo = styled(Link)`
  ${headerItem};
  
  margin-right: auto;
  padding: 0px 48px 0px 48px;
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme.normalText};
  text-decoration: none;
  background: url(https://avatars0.githubusercontent.com/u/54403981?s=400&v=4);
  background-repeat: no-repeat;
  background-size: 2em;
  
  @media (max-width: 425px) {
    padding: 0 8px 0 38px;
    font-size: 19px;
  }
`;

const HeaderLogo = () => <Logo to='/'>cryptosozluk</Logo>;

export default HeaderLogo;
