import React from 'react';
import StyledLink from '../../atoms/list';

const projectLink = {
  portfolio: 'https://github.com/davidc94/Portfolio',
  lightscamerahome: 'https://github.com/davidc94/LightsCameraHome',
  moneymanager: 'https://github.com/davidc94/money-manager-poc',
}

const ProjectLink = (props) => (
  <a href={projectLink[props.project]} target="_blank" style={{textDecoration: 'none'}}>
    <StyledLink
      size={props.size}
      style={props.style}
      color={props.color}
    >
      {props.children}
    </StyledLink>
  </a>
);

export default ProjectLink;
