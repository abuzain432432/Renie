import styled from 'styled-components'
import React from 'react'
const StyledCard = styled.div`
border-radius: 20px;
padding: 20px 40px;
background-color: white;
box-shadow: 0 5px 20px 0px #00000005;
`;
function Card(props) {
    return (
        <StyledCard className={props.className}>{
            props.children}
        </StyledCard>
    )
}
export default Card;
