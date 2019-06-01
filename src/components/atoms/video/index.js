import React from 'react';
import styled from 'styled-components';
import Typing from 'react-typing-animation';
import Colors from '../../../utils/colors';
import StyledSpan from '../../atoms/span';
import StyledDiv from '../../atoms/div';
import videosrc from '../../../assets/video.mp4'
import transparent from '../../../assets/transparent.png'

const StyledVideo = styled.video.attrs({
  autoPlay: true,
  loop: true,
  muted: true,
  preload: 'auto',
  poster: transparent,
})`
  opacity: 0.4;
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  z-index: -100;
`;

const Video = (props) => (
  <StyledDiv>
    <StyledVideo>
      <source src={videosrc} type='video/mp4' />
    </StyledVideo>
    <Typing loop>
      <StyledSpan backgroundColor={Colors.blue} size='base' color={Colors.lightGrey}>
        Hello and welcome to my website
      </StyledSpan>
      <Typing.Delay ms={1000} />
      <Typing.Speed ms={10} />
      <Typing.Backspace count={37} />
      <Typing.Speed ms={50} />
      <StyledSpan backgroundColor={Colors.blue} size='base' color={Colors.lightGrey}>
        I am a software developer from London
      </StyledSpan>
      <Typing.Delay ms={1000} />
      <Typing.Speed ms={10} />
      <Typing.Backspace count={37} />
      <Typing.Speed ms={50} />
      <Typing.Delay ms={1000} />
    </Typing>
  </StyledDiv>
);

export default Video;