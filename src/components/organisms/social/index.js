import React from 'react';
import Colors from '../../../utils/colors';
import StyledText from '../../atoms/text';
import StyledDiv from '../../atoms/div';
import StyledSocialButton from '../../molecules/socialbutton';

const Social = (props) => (
  <StyledDiv width='full' >
    <StyledText size='large' color={Colors.charcoal}>
      Social Stuff
    </StyledText>
    <StyledDiv style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <StyledSocialButton social='github' style={{ margin: '8px' }} />
      <StyledSocialButton social='linkedin' />
    </StyledDiv>
  </StyledDiv>
);

export default Social;