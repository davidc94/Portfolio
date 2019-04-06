import React from 'react';
import Typing from 'react-typing-animation';
import Colors from '../../../utils/colors';
import StyledHeader from '../../atoms/header';
import StyledDiv from '../../atoms/div';

const Header = (props) => (
  <StyledDiv backgroundColor={Colors.blue} width='full'>
    <StyledDiv backgroundColor={Colors.blue}>  
      <StyledHeader size='huge' color={Colors.lightGrey}>
        David
      </StyledHeader>
      <StyledHeader size='large' color={Colors.lightGrey}>
        Chellapah
      </StyledHeader>
    </StyledDiv>

    <StyledHeader size='base' color={Colors.lightGrey}>
      <Typing loop>
        <span>
          Hello and welcome to my website
        </span>
        <Typing.Delay ms={1000} />
        <Typing.Speed ms={10} />
        <Typing.Backspace count={37} />
        <Typing.Speed ms={50} />
        <span>
          I am a software developer from London
        </span>
        <Typing.Delay ms={1000} />
        <Typing.Speed ms={10} />
        <Typing.Backspace count={37} />
        <Typing.Speed ms={50} />
      </Typing>
    </StyledHeader>
  </StyledDiv>
);

export default Header;
