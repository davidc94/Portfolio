import React from 'react';
import Colors from '../../../utils/colors';
import StyledText from '../../atoms/text';
import StyledHeader from '../../atoms/header';
import StyledDiv from '../../atoms/div';
import StyledSocialButton from '../../molecules/socialbutton';

const Social = (props) => (
  <StyledDiv width='full' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', padding: '48px 0px' }}>
    <StyledDiv width='full' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
      <StyledDiv style={{ flex: 1 }} />
      <StyledDiv style={{ flex: 2 }}>
        <StyledHeader size='large' color={Colors.charcoal}>
          Social Stuff
        </StyledHeader>
      </StyledDiv>
      <StyledDiv style={{ flex: 1 }} />
    </StyledDiv>
    <StyledDiv style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <StyledSocialButton social='github' style={{ margin: '8px' }} />
      <StyledSocialButton social='linkedin' />
    </StyledDiv>
  </StyledDiv>
);

export default Social;