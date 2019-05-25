import React from "react"
import StyledListItem from '../../atoms/list';
import StyledDiv from '../../atoms/div';

const ListContainer = () => (    
  <StyledDiv borderWidth='small' borderColor='border' >
    <StyledListItem size='large'>
        This is a list
    </StyledListItem>
    <StyledListItem size='large'>
        This is a list
    </StyledListItem>
    <StyledListItem size='large'>
        This is a list
    </StyledListItem>
</StyledDiv>
)

export default ListContainer;
