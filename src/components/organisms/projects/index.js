import React from 'react';
import Colors from '../../../utils/colors';
import StyledText from '../../atoms/text';
import StyledDiv from '../../atoms/div';
import StyledListItem from '../../atoms/list';

const Projects = (props) => (
  <StyledDiv backgroundColor={Colors.blue} width='full' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
    <StyledDiv width='full' backgroundColor={Colors.blue} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
      <StyledDiv backgroundColor={Colors.blue} style={{ flex: 1 }} />
      <StyledDiv backgroundColor={Colors.blue} style={{ flex: 20 }}>
        <StyledText size='large' color={Colors.lightBlue}>
          Projects
        </StyledText>
      </StyledDiv>
    </StyledDiv>
    <StyledDiv width='full' backgroundColor={Colors.blue} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
      <StyledDiv backgroundColor={Colors.blue} style={{ flex: 1 }} />
      <StyledDiv backgroundColor={Colors.blue} style={{ flex: 200, flexDirection: 'column' }}>
        <StyledText size='base' color={Colors.lightGrey}>
          Here's a list of stuff that i've done in my life that I'm pretty proud of 👏
        </StyledText>
        <StyledDiv borderWidth='small' borderColor={Colors.lightBlue} backgroundColor={Colors.blue} borderRadius='medium'>
          <StyledListItem size='base' color={Colors.lightGrey}>
            This website
          </StyledListItem>
          <StyledListItem size='base' color={Colors.lightGrey}>
            Smart Home App (Uni dissertation)
          </StyledListItem>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  </StyledDiv>
)

export default Projects;