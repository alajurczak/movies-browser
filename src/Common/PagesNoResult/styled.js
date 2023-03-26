import styled from "styled-components";
import { ReactComponent as NoSearch } from "./Images/NoSearchImages.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1368px;
  margin: auto;
`
export const Title = styled.h1`
  margin-bottom: 40px;
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
`

export const NoSearchImage = styled(NoSearch)`
  align-self: center;
  `