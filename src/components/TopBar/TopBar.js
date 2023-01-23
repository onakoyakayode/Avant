import React from 'react'
import { Button } from '../../Styled/Button.styled'
import { TopBarFlex, TopBarStyled } from '../../Styled/TopBar.styled'

const TopBar = () => {
  return (
    <TopBarStyled>
        <TopBarFlex margin="0 3em" padding="0 1em" width="81rem">
            <ul className='top-bar-ul show-desktop'>
                <li className='top-bar-item navigation__item redeem-link'>
                    <p className='navigation__link text_link black-text' tabIndex="0">
                        <a className='menu-link'>REDEEM YOUR MAIL OFFER</a>
                    </p>
                    <div className='sub-navigation'>
                        <ul className='sub-navigation__list top-bar-sub-nav-list'>
                            <li className='sub-navigation__item'>
                                <a className='sub-navigation__link' data-event="credit card" href='#'> Credit Card</a>
                            </li>
                            <li className='sub-navigation__item'>
                                <a className='sub-navigation__link' href='https://www.myavantoffer.com' data-event="loan">Loan</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='top-bar-item navigation__item blue-button'>
                    <a className='navigation__link text_link white-text' href='#' data-event="login">
                        <Button color="#fff" 
                            bgColor="#2a2a3f" 
                            background="#0d5bff" 
                            padding="0.5rem 2rem" 
                            border="0px" 
                            fontSize="13px">
                                LOGIN
                        </Button>
                    </a>
                </li>
            </ul>
        </TopBarFlex>
    </TopBarStyled>
  )
}

export default TopBar
