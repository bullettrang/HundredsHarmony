import React from 'react';
import styled from 'styled-components';


const StyledDeal = styled.div`
    border:1px solid gray;
    font-family: 'Poppins', sans-serif;
    padding:1em;
`;


 const Deal =(props)=>{
    return(
        <StyledDeal>
            <h1>{props.day}</h1>
            <p>{props.deal}</p>
        </StyledDeal>
        );
}
export default Deal;