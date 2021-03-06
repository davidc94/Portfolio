import React from "react"
import StyledDiv from '../../atoms/div';
import StyledImage from '../../atoms/image';
import githubIcon from '../../../assets/github_icon.png';
import linkedinIcon from '../../../assets/linkedin_icon.png';
import colors from "../../../utils/colors";

const socialLink = {
  linkedin: 'https://www.linkedin.com/in/davidchellapah/',
  github: 'https://github.com/davidc94',
}

const socialImage = {
  linkedin: linkedinIcon,
  github: githubIcon,
}

const SocialButton = (props) => (
<a href={socialLink[props.social]} target="_blank">
  <StyledDiv borderWidth='small' borderColor={colors.blue} borderRadius='large' style={props.style}>
    <StyledImage style={{ cursor: 'pointer' }} type='button' url={socialImage[props.social]}/>
  </StyledDiv>
</a>
);

export default SocialButton;
