import styled from "styled-components";
import noImage from "./Images/VideoIcon.svg";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #ffffff;
    display: grid;
    grid-template-rows: auto 1fr;
    transition: 0.5s;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 1);
    border-radius: 5px;
    padding: 16px;

`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border-radius: 5px;
    flex-basis: auto;
    background-image: url(${noImage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
    background-color: ${({ theme }) => theme.colors.silver};
    color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    aspect-ratio: 2/3;
  `;
