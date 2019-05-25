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
        <StyledHeader size='large' color={Colors.charcoal} style={{ marginBottom: '48px' }}>
          Social Stuff
        </StyledHeader>
      </StyledDiv>
      <StyledDiv style={{ flex: 1 }} />
    </StyledDiv>
    <StyledDiv width='full' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <StyledDiv style={{ flex: 8 }} />
      <StyledDiv style={{ flex: 2 }}>
        <StyledSocialButton social='github' />
      </StyledDiv>
      <StyledDiv style={{ flex: 1 }} />
      <StyledDiv style={{ flex: 2 }}>
        <StyledSocialButton social='linkedin' />
      </StyledDiv>
      <StyledDiv style={{ flex: 8 }} />
    </StyledDiv>
  </StyledDiv>
);

export default Social;