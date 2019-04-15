import React from 'react';
import Colors from '../../../utils/colors';
import StyledText from '../../atoms/text';
import StyledDiv from '../../atoms/div';

const AboutMe = (props) => (
  <StyledDiv width='full' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
    <StyledDiv width='full' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
      <StyledDiv style={{ flex: 1 }} />
      <StyledDiv style={{ flex: 20 }}>
        <StyledText size='large' color={Colors.charcoal}>
          About Me
        </StyledText>
      </StyledDiv>
    </StyledDiv>
    <StyledDiv width='full' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
      <StyledDiv style={{ flex: 1 }} />
      <StyledDiv style={{ flex: 200, flexDirection: 'column' }}>
        <StyledText size='base'>
          Hello, my name is David. I'm a 24 year old developer from London who graduated from Brunel University 
          in 2017 with a Bachelors degree in Computer Science.
        </StyledText>
        <StyledText size='base'>
          I'm a huge gaming 🕹 enthusiast as well as TV and film 🎬 (I'm basically a nerd). I also enjoy building apps and 
          PCs when I can (building PCs is expensive ☹️)
        </StyledText>
      </StyledDiv>
    </StyledDiv>
  </StyledDiv>
);

export default AboutMe;
