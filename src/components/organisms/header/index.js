import React from 'react';
import Typing from 'react-typing-animation';
import Colors from '../../../utils/colors';
import StyledHeader from '../../atoms/header';
import StyledDiv from '../../atoms/div';

const Header = (props) => (
  <StyledDiv backgroundColor={Colors.blue} width='full'>
    <StyledHeader size='large' color={Colors.lightGrey}>
      <Typing>
        <Typing.Speed ms={75} />
        David Chellapah
      </Typing>
    </StyledHeader>
    <StyledHeader size='base' color={Colors.lightGrey}>
      Hello and welcome to my website 😎 I am a software developer from London (born and raised).
    </StyledHeader>
  </StyledDiv>
);

export default Header;
