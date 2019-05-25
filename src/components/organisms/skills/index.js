import React from 'react';
import Colors from '../../../utils/colors';
import StyledText from '../../atoms/text';
import StyledDiv from '../../atoms/div';
import StyledListItem from '../../atoms/list';

const Skills = (props) => (
  <StyledDiv backgroundColor={Colors.blue} width='full'>
    <StyledText size='large' color={Colors.lightGrey}>
      Skills
    </StyledText>
    <StyledText size='base'>
      Here are some of the skills 🥋 I've picked up along the way
    </StyledText>
    <StyledDiv borderWidth='small' borderColor={Colors.lightGrey} backgroundColor={Colors.blue} borderRadius='medium'>
      <StyledListItem size='base'>
        React Native
      </StyledListItem>
      <StyledListItem size='base'>
        React
      </StyledListItem>
      <StyledListItem size='base'>
        Jest
      </StyledListItem>
      <StyledListItem size='base'>
        GraphQL
      </StyledListItem>
      <StyledListItem size='base'>
        App Development
      </StyledListItem>
      <StyledListItem size='base'>
        CI/CD Pipelines
      </StyledListItem>
      <StyledListItem size='base'>
        Jenkins
      </StyledListItem>
    </StyledDiv>
  </StyledDiv>
)

export default Skills;