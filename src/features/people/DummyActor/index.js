import styled from "styled-components";
import dummyActorImage from "./images/dummyImage.svg";
const mobileMaxBp = ({ theme }) => theme.breakpoints.mobileMax;

export const DummyActor = styled.div`
  aspect-ratio: 3 / 4;
  width: 500px;
  height: 800px;
  object-fit: cover;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.silver};
  background-image: url(${dummyActorImage});
  background-repeat: no-repeat;
  background-position: center;
  grid-area: 1/1/4/2;

  @media (max-width: ${mobileMaxBp}px) {
    width: 100%;
  }
`;
