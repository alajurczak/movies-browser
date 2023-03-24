import styled from "styled-components";
import { ReactComponent as VectorPrevious} from "./images/VectorPrevious.svg";
import { ReactComponent as VectorNext} from "./images/VectorNext.svg";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 103px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding: 8px 12px;
    margin-right: 12px;
    background-color: ${({theme}) => theme.colors.pattensBlue};
    border: none;
    border-radius: 5px;
    cursor: pointer;

`;
export const ArrowIconPrevious = styled(VectorPrevious)`
    margin: 0 4px;
`;

export const ButtonText = styled.p`
    margin: 0 4px;
`;

export const PageCounter = styled.div`
    margin: 0 24px 0 16px;;
`;
export const PageNumbers = styled.span`
    margin: 0 8px;
`;
export const ArrowIconNext = styled(VectorNext)`
    margin: 0 4px;
`;