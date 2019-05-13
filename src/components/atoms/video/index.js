import React from 'react';
import styled from 'styled-components';
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
  <StyledVideo>
    <source src={videosrc} type='video/mp4' />
  </StyledVideo>
);

export default Video;