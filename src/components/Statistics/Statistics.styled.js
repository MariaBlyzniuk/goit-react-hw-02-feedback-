import styled from "styled-components";

export const StatisticsStyle = styled.ul`
display: flex;
`;

export const StatisticsItem = styled.li`
flex-direction: column;
font-size: 20px;
:not(:first-child){
    margin-left: 40px;
}

font-weight: 500;
`;