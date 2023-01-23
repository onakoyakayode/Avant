import styled from "styled-components";



export const Button = styled.button`
    padding: ${({padding}) => padding};
    background: ${({background}) => background};
    cursor: pointer;
    font-size: ${({fontSize}) => fontSize};
    font-weight: 700;
    color: ${({color}) => color};
    border: ${({border}) => border};
    transition: all 0.4s ease;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    letter-spacing: .4px;
    align-items: center;
    margin: ${({margin}) => margin};
    white-space: nowrap;
    width: ${({width}) => width};
    font-family: CeraProRegular, san-serif;
    gap: ${({gap}) => gap};

    &:hover {
        background-color: ${({bgColor}) => bgColor};
        color: ${({colorHover}) => colorHover};
        border: ${({borderColor}) => borderColor};
        
    }
`