import React from "react"
import { createGlobalStyle } from 'styled-components';
import StyledHeader from '../components/atoms/header';
import StyledText from '../components/atoms/text';
import StyledDiv from '../components/atoms/div';
import StyledListItem from '../components/atoms/list';
import StyledSocialButton from '../components/molecules/socialbutton';
import Colors from '../utils/colors';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${Colors.background};
  }
`

export default () => (    
  <div
    style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
  >
    <GlobalStyle />
    <StyledHeader size='large'>
      David Chellapah
    </StyledHeader>    
    <StyledHeader size='base'>
      My name is David and welcome to my website 😎 I am a software developer from London (born and raised).
    </StyledHeader>
    <StyledText size='large'>
      Projects
    </StyledText>
    <StyledText size='base'>
      Here's a list of stuff that i've done in my life that I'm pretty proud of 👏
    </StyledText>
    <StyledDiv borderWidth='small' borderColor='border' >
      <StyledListItem size='base'>
        This website
      </StyledListItem>
      <StyledListItem size='base'>
        Smart Home App (Uni dissertation)
      </StyledListItem>
    </StyledDiv>
    <StyledText>
      Now that the boring stuff is out of the way, I also enjoy photography and shooting videos so here's a 
      small collection of of videos and pictures from travelling ✈️.
    </StyledText>
    <StyledSocialButton social='github' style={{ margin: '8px' }} />
    <StyledSocialButton social='linkedin' />
  </div>
)
