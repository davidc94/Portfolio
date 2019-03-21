import React from 'react';
import Colors from '../../../utils/colors';
import StyledText from '../../atoms/text';
import StyledDiv from '../../atoms/div';
import StyledSocialButton from '../../molecules/socialbutton';

const Social = (props) => (
  <StyledDiv>
    <StyledText size='large' color={Colors.lightBlue}>
      Social Stuff
    </StyledText>
    <StyledSocialButton social='github' style={{ margin: '8px' }} />
    <StyledSocialButton social='linkedin' />
  </StyledDiv>
);

export default Social;