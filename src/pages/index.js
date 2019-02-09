import React from "react"
import { createGlobalStyle } from 'styled-components';
import StyledHeader from '../components/atoms/header';
import StyledText from '../components/atoms/text';
import StyledListContainer from '../components/molecules/listcontainer';
import Colors from '../utils/colors';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${Colors.background};
  }
`

export default () => (    
    <div>
        <GlobalStyle />
        <StyledHeader size='large'>
            Hello!
        </StyledHeader>    
        <StyledHeader size='base'>
            Welcome to my website!
        </StyledHeader>
        <StyledText size='large'>
            My name is David
        </StyledText>
        <StyledListContainer />
    </div>
)
