import styled from "styled-components";

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
`;

export const ProfileImage = styled.img`
    display: flex;
    justify-content: center;
    height: auto;
    width: 100%;
    border-radius: 5px;
`;

export const Name = styled.p`
    margin-top: 16px;
    margin-bottom: 0;
    text-align: center;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
`;