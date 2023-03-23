import styled from "styled-components";
import VideoIcon from "./Images/VideoIcon.svg";
import {ReactComponent as StarIcon} from "./Images/Star.svg"

export const MovieWrapper = styled.div`
    width: 342px;
    height: 650px;
    background: ${({theme}) => theme.colors.white};
    display: grid;
    gap: 16px;
    grid-template-rows: auto 1fr;
    box-shadow: 0px 4px 12px #bac7d5;
    border-radius: 5px;
    padding: 16px;
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 434px;
    border-radius: 5px;
    flex-basis: auto;
    background-image: url(${VideoIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    background-color: ${({ theme }) => theme.colors.silver};
    color: ${({ theme }) => theme.colors.white};
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Content = styled.div`
    font-size: 22px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.smoke};
`

export const ExtraContent = styled.div`
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.waterloo};
`

export const Tag = styled.div`
    font-size: 14px;
    height: 36px;
    border-radius: 5px;
    background-color: ${({theme}) => theme.colors.mystic};
    padding: 8px 16px 8px 16px;
    color: ${({theme}) => theme.colors.smoke};
`

export const WrapperTag = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const Star = styled(StarIcon)`
    width: 24px;
`

export const Rates = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.smoke}
`

export const Votes = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.smoke}
`