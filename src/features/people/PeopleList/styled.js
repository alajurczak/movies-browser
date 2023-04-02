import styled from "styled-components";
import { Link } from "react-router-dom";
const mediumBp = ({ theme }) => theme.breakpoints.medium;
const mobileMaxBp = ({ theme }) => theme.breakpoints.mobileMax;
const largeBp = ({ theme }) => theme.breakpoints.large;
const maxBp = ({ theme }) => theme.breakpoints.max;


export const PeopleList = styled.div`
    padding: 0;
    margin: 0;
    display: grid;
    gap: 24px;
    justify-content: center;
    grid-template-columns: repeat(6, 1fr);

    @media (max-width: ${maxBp}px) {
        grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: ${largeBp}px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${mobileMaxBp}px) {
        gap: 16px;
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${mediumBp}px) {
        gap: 16px;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    };
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.colors.black}
`
