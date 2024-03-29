import React from 'react';
import styled from 'styled-components/macro';
import { transition } from '../../shared/helpers';

const Icon = styled.svg`
  width: 20px;
  height: 20px;

  & path {
    ${transition('fill')};

    fill: ${props => props.theme.mutedText};
  }
  
  @media (max-width: 425px) {
    width: 18px;
    height: 18px;
  }
`;

const HeaderDarkButtonIcon = () => (
  <Icon viewBox="0 0 48 48" enable-background="new 0 0 48 48">
    <polygon fill="#673AB7" points="16.5,18 0,42 33,42"/>
    <polygon fill="#9575CD" points="33.6,24 19.2,42 48,42"/>
    <path fill="#40C4FF" d="M42.9,6.3C43.6,7.4,44,8.6,44,10c0,3.9-3.1,7-7,7c-0.7,0-1.3-0.1-1.9-0.3c1.2,2,3.4,3.3,5.9,3.3 c3.9,0,7-3.1,7-7C48,9.8,45.9,7.1,42.9,6.3z"/>
  </Icon>
);

export default HeaderDarkButtonIcon;
