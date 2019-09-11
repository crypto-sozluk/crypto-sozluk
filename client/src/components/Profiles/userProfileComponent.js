import React from 'react';
import styled from 'styled-components/macro';
import ImageLogo from '../../img/imageProfile.png';

const Profile = styled.ul`
  list-style: none;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  border-color: azure;
  padding: 1em;

  @media (max-width: 768px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    
  }
`;

const UserProfileTitle = styled.ul`
  list-style: none;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  font-size: 30px;
  font-family: monospace;
  background-color: #e4e1fffa;

  @media (max-width: 768px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    text-align: center;
  }
`;

const ProfileLogo = styled.ul`
  list-style: none;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  background-image: url(${ImageLogo});
  width: 14em;
  height: 8em;
  background-repeat: round;

  @media (max-width: 768px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    margin: 14px 0px 1px 58px;
  }
`;

const UserName = styled.ul`
  list-style: none;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  margin-left: 14em;
  margin-top: -7em;
  padding: 1em;
  color: darkorange;

  @media (max-width: 768px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    margin: 3px 0px 3px 0px;
    text-align: center;
  }
`;

const Description = styled.ul`
  list-style: none;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  margin-left: 14em;
  padding: 1.1em;

  @media (max-width: 768px) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    margin: 3px 0px 3px 0px;
    text-align: center;
  }
`;

class userProfileComponent extends React.Component {
  render() {

    return (
      <Profile>
        <UserProfileTitle>User Profile</UserProfileTitle>
        <ProfileLogo/>
          <UserName>squarepusher</UserName>
          <Description>merhabalar, 21 yaş istanbul "#BTC ile uğraşıyorum. falanfalan filanfalan filanfalan filanfalan filanfalan filanfalan filan filan</Description> 
      </Profile>
    );
  }
}

export default userProfileComponent;
