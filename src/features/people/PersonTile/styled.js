import styled from "styled-components";
const mobileMinBp = ({ theme }) => theme.breakpoints.mobileMin;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    display: grid;
    grid-template-rows: auto 1fr;
    transition: 0.5s;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    padding: 16px;

    &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0px 4px 12px ${({ theme }) => theme.colors.scienceBlue};
  }

  &:active {
    transform: scale(1.05);
  }

  @media (max-width: ${mobileMinBp}px) {
        padding: 8px;
        width: 138px;
    };
`;

export const ProfileImage = styled.img`
    display: flex;
    justify-content: center;
    height: auto;
    width: 100%;
    border-radius: 5px;

    @media (max-width: ${mobileMinBp}px) {
        width: 120px;
    };
`;

export const Name = styled.p`
    margin-top: 16px;
    margin-bottom: 0;
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;

    @media (max-width: ${mobileMinBp}px) {
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
    };
`;