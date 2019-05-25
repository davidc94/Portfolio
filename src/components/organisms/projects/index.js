import React from 'react';
import Colors from '../../../utils/colors';
import StyledText from '../../atoms/text';
import StyledHeader from '../../atoms/header';
import StyledDiv from '../../atoms/div';
import StyledListItem from '../../atoms/list';
import StyledProjectLink from '../../molecules/projectlink';

const Projects = (props) => (
  <StyledDiv backgroundColor={Colors.blue} width='full' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', padding: '48px 0px' }}>
    <StyledDiv width='full' backgroundColor={Colors.blue} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
      <StyledDiv backgroundColor={Colors.blue} style={{ flex: 1 }} />
      <StyledDiv backgroundColor={Colors.blue} style={{ flex: 2 }}>
        <StyledHeader size='large' color={Colors.lightBlue}>
          Projects
        </StyledHeader>
      </StyledDiv>
      <StyledDiv backgroundColor={Colors.blue} style={{ flex: 1 }} />
    </StyledDiv>
    <StyledDiv width='full' backgroundColor={Colors.blue} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', maxWidth: '1080px' }}>
      <StyledDiv backgroundColor={Colors.blue} style={{ flex: 1 }} />
      <StyledDiv backgroundColor={Colors.blue} style={{ flex: 4, flexDirection: 'column' }}>
        <StyledText size='large' color={Colors.lightGrey} style={{marginBottom: '8px'}}>
          Here's a list of projects I've worked on both professionally and personally:
        </StyledText>
        <StyledDiv borderColor={Colors.lightBlue} backgroundColor={Colors.blue} borderRadius='medium'>
          <StyledProjectLink project='portfolio' size='large' color={Colors.lightGrey}>
            This website
          </StyledProjectLink>
          <StyledProjectLink project='lightscamerahome' size='large' color={Colors.lightGrey}>
            Smart Home App
          </StyledProjectLink>
          <StyledProjectLink project='moneymanager' size='large' color={Colors.lightGrey}>
            giffgaff Money Manager App POC
          </StyledProjectLink>
        </StyledDiv>
      </StyledDiv>
      <StyledDiv backgroundColor={Colors.blue} style={{ flex: 1 }} />
    </StyledDiv>
  </StyledDiv>
)

export default Projects;