import React from 'react';
import Colors from '../../../utils/colors';
import StyledText from '../../atoms/text';
import StyledDiv from '../../atoms/div';

const Gallery = (props) => (
  <StyledDiv>
    <StyledText size='large' color={Colors.lightBlue}>
      Gallery
    </StyledText>
    <StyledText>
      Now that the boring stuff is out of the way, I also enjoy photography and shooting videos so here's a 
      small collection of of videos and pictures from travelling ✈️.
    </StyledText>
  </StyledDiv>
);

export default Gallery;