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

const ListStyling = styled('li')`
    font-size: ${ props => props.size ? fontSize[props.size] : fontSize['base']};
    color: ${ customColor.text };
`;

const StyledList = (props) => (
  <ListStyling
    size={props.size}
    style={props.style}
    color={props.color}
  >
    {props.children}
  </ListStyling>
);

export default StyledList;
