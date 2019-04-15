import React from 'react';
import Typing from 'react-typing-animation';
import Colors from '../../../utils/colors';
import StyledHeader from '../../atoms/header';
import StyledDiv from '../../atoms/div';

const Header = (props) => (
  <StyledDiv backgroundColor={Colors.blue} width='full' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
    <StyledDiv backgroundColor={Colors.blue} style={{ flex: 1 }} />
    <StyledDiv backgroundColor={Colors.blue} style={{ flex: 2, padding: '0px 16px' }}>
      <StyledHeader size='huge' color={Colors.lightBlue}>
        David
      </StyledHeader>
      <StyledHeader size='large' color={Colors.lightBlue}>
        Chellapah
      </StyledHeader>
    </StyledDiv>
    <StyledDiv backgroundColor={Colors.blue} style={{ flex: 2 }}>
      <StyledDiv backgroundColor={Colors.blue} >
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
            <Typing.Delay ms={1000} />
          </Typing>
        </StyledHeader>
      </StyledDiv>    
    </StyledDiv>
    <StyledDiv backgroundColor={Colors.blue} style={{ flex: 1 }} />
  </StyledDiv>
);

export default Header;
