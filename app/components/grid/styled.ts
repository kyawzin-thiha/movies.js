import styled from "styled-components";

export const GridContainer = styled.div`
    position: relative;
    transform: translateY(-100px);
    width: 100%;
    height: auto;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
    column-gap: 10px;
    grid-template-rows: auto;
    row-gap: 10px;
    @media screen and (max-width: 600px) {
        transform: translateY(-30px);
        grid-template-columns: repeat(auto-fit, minmax(105px, 1fr));
    }
`