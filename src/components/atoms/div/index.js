import React from 'react';
import styled from 'styled-components';
import Colors from '../../../utils/colors';

const borderColor = {
  default: Colors.background,
  text: Colors.text,
  header: Colors.header,
  border: Colors.border
};

const borderWidth = {
  default: '0px',
  small: '2px',
  medium: '4px',
  large: '8px',
};

const borderRadius = {
  flat: '0px',
  small: '2px',
  medium: '4px',
  large: '8px',
}

const DivStyling = styled('div')`
    border: ${ props => props.borderWidth ? borderWidth[props.borderWidth] : borderWidth['default'] } solid ${ props => props.borderColor ? borderColor[props.borderColor] : borderColor['default'] };
    border-radius: ${ props => props.borderRadius ? borderRadius[props.borderRadius] : borderRadius['flat'] };
    display: inline-block;
    padding: 4px;
`;

const StyledDiv = (props) => (
  <DivStyling
    style={props.style}
    borderColor={props.borderColor}
    borderWidth={props.borderWidth}
    borderRadius={props.borderRadius}
  >
    {props.children}
  </DivStyling>
);

export default StyledDiv;
