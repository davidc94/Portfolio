import React from "react"
import StyledHeader from '../components/atoms/header';
import StyledText from '../components/atoms/text';
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
        <StyledText size='large'>
            My name is David
        </StyledText>
    </div>
)
