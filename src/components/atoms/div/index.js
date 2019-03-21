import React from 'react';
import styled from 'styled-components';
import Colors from '../../../utils/colors';

const backgroundColor = {
  default: Colors.lightGrey,
  text: Colors.text,
  header: Colors.charcoal,
  border: Colors.blue
};

const width = {
  default: 'auto',
  full: '100%',
  half: '50%',
}

const borderColor = {
  default: Colors.lightGrey,
  text: Colors.text,
  header: Colors.charcoal,
  border: Colors.blue
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
    background-color: ${ props => props.backgroundColor ? backgroundColor[props.backgroundColor] : backgroundColor['default'] };
    width: ${ props => props.width ? width[props.width] : width['default'] };
`;

const StyledDiv = (props) => (
  <DivStyling
    style={props.style}
    borderColor={props.borderColor}
    borderWidth={props.borderWidth}
    borderRadius={props.borderRadius}
    backgroundColor={props.backgroundColor}
    width={props.width}
  >
    {props.children}
  </DivStyling>
);

export default StyledDiv;
