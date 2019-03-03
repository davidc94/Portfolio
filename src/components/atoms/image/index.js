import React from 'react';
import styled from 'styled-components';
import Colors from '../../../utils/colors';

const ImageStyling = styled('img')`
    display: inline-block;
    padding: 4px;
`;

const StyledImage = (props) => (
  <ImageStyling
    style={props.style}
    src={props.url}
  />
);

export default StyledImage;
