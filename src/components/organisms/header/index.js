import React from 'react';
import Colors from '../../../utils/colors';
import StyledHeader from '../../atoms/header';
import StyledDiv from '../../atoms/div';

const Header = (props) => (
  <StyledDiv backgroundColor={Colors.blue} width='full'>
    <StyledHeader size='large' color={Colors.lightGrey}>
      David Chellapah
    </StyledHeader>    
    <StyledHeader size='base' color={Colors.lightGrey}>
      My name is David and welcome to my website 😎 I am a software developer from London (born and raised).
    </StyledHeader>
  </StyledDiv>
);

export default Header;
