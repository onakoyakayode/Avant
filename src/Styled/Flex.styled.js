import styled from "styled-components";


export const Flex = styled.div`
    display: flex;
    align-items: ${({alignItems}) =>alignItems};
    justify-content: ${({justifyContent}) => justifyContent}
    width: 100%;
    padding: ${({padding}) => padding};
    gap: ${({gap}) => gap};

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 25px;
    }

    

    @media screen and (max-width: 600px) {
        .nav__items {
            flex-direction: column;
            width: 100%;
            position: absolute;
            top: 60px;
            left: 0%;
            height: 100vh;
            align-items: start;
            margin: 0 auto;
            justify-content: flex-start;
            padding: 60px 20px;
        }

        .headline-mobile {
            flex-direction: column;
        }
        
    }

    .top-bar-sub-nav {
        width: 170px;
        left: 10%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        z-index: 10;

        li {
            margin-inline: 1rem;
            aling-self: start;
            font-size: 14px;
            overflow-y: visible;
            list-style: none;
        }
    }

    .top-bar-sub-nav-list {
        text-align: left;
        
    }
`