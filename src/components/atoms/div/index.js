import React from 'react';
import styled from 'styled-components';
import Colors from '../../../utils/colors';

const customColor = {
  default: Colors.background,
  text: Colors.text,
  header: Colors.header,
  border: Colors.border
};

const borderWidth = {
  default: 0,
  small: '2px',
  medium: 4,
  large: 8,
};

const DivStyling = styled('div')`
    border: ${ props => props.borderWidth ? borderWidth[props.borderWidth] : borderWidth['default'] } solid ${ props => props.borderColor ? customColor[props.borderColor] : customColor['default'] };
    border-radius: 5px;
    display: inline-block;
    padding: 4px;
`;

const StyledDiv = (props) => (
  <DivStyling
    style={props.style}
    borderColor={props.borderColor}
    borderWidth={props.borderWidth}
  >
    {props.children}
  </DivStyling>
);

export default StyledDiv;
