import React from 'react';
import Colors from '../../../utils/colors';
import StyledText from '../../atoms/text';
import StyledDiv from '../../atoms/div';

const Gallery = (props) => (
  <StyledDiv width='full' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
    <StyledDiv width='full' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
      <StyledDiv style={{ flex: 1 }} />
      <StyledDiv style={{ flex: 2 }}>
        <StyledText size='large' color={Colors.charcoal}>
        Gallery
      </StyledText>
      </StyledDiv>
      <StyledDiv style={{ flex: 1 }} />
    </StyledDiv>
    <StyledDiv width='full' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
      <StyledDiv style={{ flex: 5 }} />
      <StyledDiv style={{ flex: 20, flexDirection: 'column' }}>
        <StyledText>
          Now that the boring stuff is out of the way, I also enjoy photography and shooting videos so here's a 
          small collection of of videos and pictures from travelling ✈️.
        </StyledText>
      </StyledDiv>
      <StyledDiv style={{ flex: 5 }} />
    </StyledDiv>
  </StyledDiv>
);

export default Gallery;