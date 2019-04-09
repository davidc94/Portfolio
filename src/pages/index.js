import React from "react"
import { createGlobalStyle } from 'styled-components';
import Colors from '../utils/colors';
import Header from '../components/organisms/header';
import AboutMe from '../components/organisms/aboutme';
import Projects from '../components/organisms/projects';
import Skills from '../components/organisms/skills';
import Gallery from '../components/organisms/gallery';
import Social from '../components/organisms/social';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    /* max-width: 1080px; */
  }
  html {
    background-color: ${Colors.lightGrey};
  }
`

export default () => (    
  <div
    style={{ 
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <GlobalStyle />
    <Header />
    <AboutMe />
    <Projects />
    <Gallery />
    <Social />
  </div>
)
