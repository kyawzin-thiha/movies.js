import styled from "styled-components";

export const PosterContainer = styled.div`
    position: relative;
    width: 185px;
    height:  275px;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    overflow: hidden;
    &:hover {
        Rating: {
            opacity: 1;
        }
    }
    @media screen and (max-width: 600px) {
        width: 105px;
        height: 155px;
    }
`

export const Poster = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    &: hover{
        transform: scale(1.1);
    }
`
