import styled from "styled-components";



export const H1 = styled.h1`
    font-size: ${({fontSize}) => fontSize};
    line-height: ${({lineHeight}) => lineHeight};
    text-shadow: ${({textShadow}) => textShadow};
    width: ${({width}) => width};
    color: ${({color}) => color};


    @media screen and (max-width: 600px) {
        font-size: 1.6rem;
        line-height: 2rem;
    }
`

export const SPAN = styled.span`
    font-size: 11rem;
    line-height: 9rem;
    text-shadow: ${({textShadow}) => textShadow};


    @media screen and (max-width: 600px) {
        font-size: 0rem;
        line-height: 1.5rem;
    }
`