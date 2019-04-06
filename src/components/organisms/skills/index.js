import React from 'react';
import Typing from 'react-typing-animation';
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
    <StyledDiv backgroundColor={Colors.blue}>
      <Typing>
        <Typing.Delay ms={2000} />
        <StyledListItem size='base'>
          React Native
        </StyledListItem>
        <Typing.Delay ms={500} />
        <StyledListItem size='base'>
          React
        </StyledListItem>
        <Typing.Delay ms={500} />
        <StyledListItem size='base'>
          Jest
        </StyledListItem>
        <Typing.Delay ms={500} />
        <StyledListItem size='base'>
          GraphQL
        </StyledListItem>
        <Typing.Delay ms={500} />
        <StyledListItem size='base'>
          App Development
        </StyledListItem>
        <Typing.Delay ms={500} />
        <StyledListItem size='base'>
          CI/CD Pipelines
        </StyledListItem>
        <Typing.Delay ms={500} />
        <StyledListItem size='base'>
          Jenkins
        </StyledListItem>
      </Typing>
    </StyledDiv>
  </StyledDiv>
)

export default Skills;