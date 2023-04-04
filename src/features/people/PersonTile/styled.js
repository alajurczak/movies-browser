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
  } ;
`;

export const ProfileImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
  aspect-ratio: 3 / 4;

  @media (max-width: ${mobileMinBp}px) {
    width: 120px;
  } ;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin: 12px 0 0 0;
  color: ${({ theme }) => theme.colors.woodsmoke};
  word-break: break-word;

  @media (max-width: ${mobileMinBp}px) {
    font-size: 14px;
    margin: 8px 0 0 0;
  }
`;

export const Character = styled.div`
  font-size: 18px;
  margin-top: 8px;
  text-align: center;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${mobileMinBp}px) {
    font-size: 13px;
    margin: 8px 0 0 0;
  }
`;
