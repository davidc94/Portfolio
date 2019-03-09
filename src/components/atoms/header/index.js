import React from 'react';
import styled from 'styled-components';
import Colors from '../../../utils/colors';

const fontSize = {
  base: '18px',
  large: '35px',
  small: '12px',
};

const customColor = {
  header: Colors.header,
};

const margin = {
  default: '0px',
  small: '2px',
  medium: '4px',
  large: '8px',
}

const HeaderStyling = styled('h1')`
    font-size: ${ props => props.size ? fontSize[props.size] : fontSize['base']};
    color: ${ customColor.header };
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
