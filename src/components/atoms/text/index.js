import React from 'react';
import styled from 'styled-components';
import Colors from '../../../utils/colors';

const fontSize = {
  base: '14px',
  large: '24px',
  small: '8px',
};

const customColor = {
  text: Colors.text,
};

const TextStyling = styled('p')`
    font-size: ${ props => props.size ? fontSize[props.size] : fontSize['base']};
    color: ${ customColor.text };
`;

const StyledText = (props) => (
  <TextStyling
    size={props.size}
    style={props.style}
    color={props.color}
  >
    {props.children}
  </TextStyling>
);

export default StyledText;
