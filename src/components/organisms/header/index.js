import React from 'react';
import Typing from 'react-typing-animation';
import Colors from '../../../utils/colors';
import StyledHeader from '../../atoms/header';
import StyledSpan from '../../atoms/span';
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
        <StyledDiv backgroundColor={Colors.blue}>
          <Typing loop>
            <StyledSpan backgroundColor={Colors.blue} size='base' color={Colors.lightGrey}>
              Hello and welcome to my website
            </StyledSpan>
            <Typing.Delay ms={1000} />
            <Typing.Speed ms={10} />
            <Typing.Backspace count={37} />
            <Typing.Speed ms={50} />
            <StyledSpan backgroundColor={Colors.blue} size='base' color={Colors.lightGrey}>
              I am a software developer from London
            </StyledSpan>
            <Typing.Delay ms={1000} />
            <Typing.Speed ms={10} />
            <Typing.Backspace count={37} />
            <Typing.Speed ms={50} />
            <Typing.Delay ms={1000} />
          </Typing>
        </StyledDiv>
      </StyledDiv>    
    </StyledDiv>
    <StyledDiv backgroundColor={Colors.blue} style={{ flex: 1 }} />
  </StyledDiv>
);

export default Header;
