import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../../Styled/Button.styled'
import { TopBarFlex, TopBarStyled } from '../../Styled/TopBar.styled'

const TopBar = () => {
  return (
    <TopBarStyled>
        <TopBarFlex margin="0 3em" padding="0 1em" width="81rem">
            <ul className='top-bar-ul show-desktop'>
                <li className='top-bar-item navigation__item redeem-link'>
                    <p className='navigation__link text_link black-text' tabIndex="0">
                        <NavLink to='/' className='menu-link'>REDEEM YOUR MAIL OFFER</NavLink>
                    </p>
                    <div className='sub-navigation'>
                        <ul className='sub-navigation__list top-bar-sub-nav-list'>
                            <li className='sub-navigation__item'>
                                <NavLink className='sub-navigation__link' data-event="credit card" to='/credit-card'> Credit Card</NavLink>
                            </li>
                            <li className='sub-navigation__item'>
                                <a className='sub-navigation__link' href='https://www.myavantoffer.com' data-event="loan">Loan</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='top-bar-item navigation__item blue-button'>
                    <NavLink className='navigation__link text_link white-text' to='/' data-event="login">
                        <Button color="#fff" 
                            bgColor="#2a2a3f" 
                            background="#0d5bff" 
                            padding="0.5rem 2rem" 
                            border="0px" 
                            fontSize="13px">
                                LOGIN
                        </Button>
                    </NavLink>
                </li>
            </ul>
        </TopBarFlex>
    </TopBarStyled>
  )
}

export default TopBar
