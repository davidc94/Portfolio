import React from "react"
import { createGlobalStyle } from 'styled-components';
import StyledHeader from '../components/atoms/header';
import StyledText from '../components/atoms/text';
import StyledDiv from '../components/atoms/div';
import StyledListItem from '../components/atoms/list';
import StyledSocialButton from '../components/molecules/socialbutton';
import Colors from '../utils/colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
  html {
    background-color: ${Colors.lightGrey};
  }
`

export default () => (    
  <div
    style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
  >
    <GlobalStyle />
    <StyledDiv backgroundColor={Colors.blue} width='full'>
      <StyledHeader size='large' color={Colors.lightGrey}>
        David Chellapah
      </StyledHeader>    
      <StyledHeader size='base' color={Colors.lightGrey}>
        My name is David and welcome to my website 😎 I am a software developer from London (born and raised).
      </StyledHeader>
    </StyledDiv>
    <StyledText size='large' color={Colors.lightBlue}>
      About Me
    </StyledText>
    <StyledText size='base'>
      Hello, my name is David. I'm a 24 year old developer from London who graduated from Brunel University 
      in 2017 with a Bachelors degree in Computer Science.
    </StyledText>
    <StyledText size='base'>
      I'm a huge gaming 🕹 enthusiast as well as TV and film 🎬 (I'm basically a nerd). I also enjoy building apps and 
      PCs when I can (building PCs is expensive ☹️)
    </StyledText>
    <StyledDiv backgroundColor={Colors.blue} width='full'>
      <StyledText size='large' color={Colors.lightBlue}>
        Projects
      </StyledText>
      <StyledText size='base'>
        Here's a list of stuff that i've done in my life that I'm pretty proud of 👏
      </StyledText>
      <StyledDiv borderWidth='small' borderColor={Colors.lightGrey} backgroundColor={Colors.blue} borderRadius='medium'>
        <StyledListItem size='base'>
          This website
        </StyledListItem>
        <StyledListItem size='base'>
          Smart Home App (Uni dissertation)
        </StyledListItem>
      </StyledDiv>
    </StyledDiv>
    <StyledText size='large' color={Colors.lightBlue}>
      Gallery
    </StyledText>
    <StyledText>
      Now that the boring stuff is out of the way, I also enjoy photography and shooting videos so here's a 
      small collection of of videos and pictures from travelling ✈️.
    </StyledText>
    <StyledText size='large' color={Colors.lightBlue}>
      Social Stuff
    </StyledText>
    <StyledSocialButton social='github' style={{ margin: '8px' }} />
    <StyledSocialButton social='linkedin' />
  </div>
)
