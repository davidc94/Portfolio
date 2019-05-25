import React from 'react';
import Colors from '../../../utils/colors';
import StyledText from '../../atoms/text';
import StyledHeader from '../../atoms/header';
import StyledDiv from '../../atoms/div';

const AboutMe = (props) => (
  <StyledDiv width='full' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', padding: '48px 0px' }}>
    <StyledDiv width='full' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
      <StyledDiv style={{ flex: 1 }} />
      <StyledDiv style={{ flex: 2 }}>
        <StyledHeader size='large' color={Colors.charcoal} style={{ marginBottom: '48px' }}>
          About Me
        </StyledHeader>
      </StyledDiv>
      <StyledDiv style={{ flex: 1 }} />
    </StyledDiv>
    <StyledDiv width='full' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', maxWidth: '1080px' }}>
      <StyledDiv style={{ flex: 1 }} />
      <StyledDiv style={{ flex: 4, flexDirection: 'column' }}>
        <StyledText size='large'>
          Hello, my name is David. I'm a 24 year old developer from London who graduated from Brunel University 
          in 2017 with a Bachelors degree in Computer Science. I've been working at giffgaff as a software developer since then.
        </StyledText>
      </StyledDiv>
      <StyledDiv style={{ flex: 1 }} />
    </StyledDiv>
  </StyledDiv>
);

export default AboutMe;
