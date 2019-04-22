import React from 'react';
import styled from 'styled-components';
import Colors from '../../../utils/colors';

const fontSize = {
  small: '12px',
  base: '18px',
  large: '35px',
  huge: '72px',
};

const TypedSpanStyling = styled('span')`
  background-color: ${ props => props.backgroundColor ? props.backgroundColor : Colors.lightGrey };
  color: ${ props => props.color ? props.color: Colors.black };
  font-size: ${ props => props.size ? fontSize[props.size] : fontSize['base']};
  @media (max-width: 500px) {
    display: none;
  };
`;

const StyledTypedSpan = (props) => (
  <TypedSpanStyling
    style={props.style}
    backgroundColor={props.backgroundColor}
    color={props.color}
    size={props.size}
  >
    {props.children}
  </TypedSpanStyling>
);

export default StyledTypedSpan;
