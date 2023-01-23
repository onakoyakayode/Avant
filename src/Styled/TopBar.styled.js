import styled from "styled-components";



export const TopBarStyled = styled.div`
    background-color: #e8e8e8;
    border-bottom: none;
    height: 2rem;
    display: flex;
    align-items: center;
    flex-direction: inherit;


    @media screen and (max-width: 600px) {
        display: none;
    }
`


export const TopBarFlex = styled.div`
    display: flex;
    align-items: center;
    margin: ${({margin}) => margin};
    padding: ${({padding}) => padding};
    width: ${({width}) => width};
    font-size: 13px;
    color: #fff;
    justify-content: flex-end;
    gap: ${({gap}) => gap};



    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        font-size: 17px;
    }

    .sub-navigation__list {
        display: none;
        background-color: #fff;
        width: 100%;
        height: max-content;
        text-align: justify;
        padding-top: 10px;

        @media screen and (max-width: 600px) {
            height: 100%;

        }


        li {
            margin-block: 1.5rem 1rem;
            margin-inline: 10px;
        }    
    }

    .top-bar-item:hover .sub-navigation__list {
        display: block;
        width: 100%;
        height: max-content;
        background-color: #fff;
        cursor: pointer;
        box-shadow: 0 4px 10px 0 rgb(0 0 0 / 14%);
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 2rem;
        z-index: 10;
    }

   
    .top-bar-ul {
        display: flex;
        align-items: center;
        position: relative;
        list-style: none;
    }

    .top-bar-ul a {
        text-decoration: none;
    }


    .navigation__link a {
        color: #0d5bff;
        font-size: 13px
    }

    .top-bar-item {
        border: none;
        margin: 0;
        padding: 1rem 1rem;
        position: relative;
    }

    .redeem-link:hover {
        background: #fff;
    }

    
    

    .navigation-item {
        color: #2a2a3f;
        display: block;
        font-family: 'ceraprobold',sans-serif;
        font-size: 13px;
        padding: 0;
        background-color: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        font-weight: 700;
        padding: 1em 0.75em;
        position: relative;
        text-decoration: none;
        width: 100%;
    }

    .sub-navigation {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        height: max-content;
        background: transparent;
        position: absolute;
        top: 0;
        left: 0;

        // @media screen and (max-width: 600px)  {
        //     position: relative;
        // }
    }

    .sub-navigation__link {
        color: #2a2a3f;
        cursor: inherit;
    }

    .sub-navigation__link:hover {
        color: #0d5bff;
    }

    #nav-links {
        color: #2a2a3f;


        @media screen and (max-width: 600px) {
            color: #fff;
        }
    }

    

    #nav-links:hover {
        color: #0d5bff;
    }
`