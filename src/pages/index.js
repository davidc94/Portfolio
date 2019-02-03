import React from "react"
import StyledHeader from '../components/atoms/text/header';
import Colors from '../utils/colors';

export default () => (
    <div
        style={{backgroundColor: Colors.background}}
    >
        <StyledHeader size='large'>
            Hello!
        </StyledHeader>
        <StyledHeader size='base'>
            Welcome to my website!
        </StyledHeader>
        <StyledHeader size='small'>
            My name is David
        </StyledHeader>
    </div>
)
