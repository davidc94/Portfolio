import React from 'react';
import styled from 'styled-components';
import Colors from '../../../utils/colors';

const width = {
  default: 'auto',
  full: '100%',
  half: '50%',
}

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
    border: ${ props => props.borderWidth ? borderWidth[props.borderWidth] : borderWidth['default'] } solid ${ props => props.borderColor ? props.borderColor : Colors.lightGrey };
    border-radius: ${ props => props.borderRadius ? borderRadius[props.borderRadius] : borderRadius['flat'] };
    display: inline-block;
    background-color: ${ props => props.backgroundColor ? props.backgroundColor : Colors.lightGrey };
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
