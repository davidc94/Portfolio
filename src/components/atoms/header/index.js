import React from 'react';
import styled from 'styled-components';
import Colors from '../../../utils/colors';

const fontSize = {
  small: '12px',
  base: '18px',
  large: '35px',
  huge: '72px',
};

const margin = {
  default: '0px',
  small: '2px',
  medium: '4px',
  large: '8px',
}

const HeaderStyling = styled('h1')`
    font-size: ${ props => props.size ? fontSize[props.size] : fontSize['base']};
    color: ${ props => props.color ? props.color: Colors.black };
    margin: ${ props => props.margin ? margin[props.margin] : margin['default']};
`;

const StyledHeader = (props) => (
  <HeaderStyling
    size={props.size}
    style={props.style}
    color={props.color}
    margin={props.margin}
  >
    {props.children}
  </HeaderStyling>
);

export default StyledHeader;
