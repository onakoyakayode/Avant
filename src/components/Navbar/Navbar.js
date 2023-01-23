import React, { useState } from 'react'
import { Flex } from '../../Styled/Flex.styled'
import { TopBarFlex } from '../../Styled/TopBar.styled'
import { UilAlignJustify } from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [openNav, setOpenNav] = useState(true);
    
    function handleClick() {
        setOpenNav(!openNav)
    }


  return (
    <div className='nav'>
        <Flex alignItems="center" justifyContent="space-between" padding="0.5rem 0rem" className='nav-item'>
            <div className='img-logo'>
                <a href='/'>
                    <picture>
                    <img src='/images/avant-logo.png' alt='Avant'/>
                    </picture>
                </a>
            </div>

            {openNav ? <TopBarFlex gap="25px" width="69rem" className='nav__items'>
                <ul className='top-nav-link'>
                    <li className='top-nav-item'>
                        <p className='nav_link'>
                            <NavLink id='nav-links' to="">CREDIT CARDS</NavLink>
                        </p>
                    </li>
                    <div className='sub-nav'>
                        <ul className='sub_nav_lists'>
                            <li className='sub_nav_item'>
                                <NavLink className='sub_nav_link' to='/credit-card'>Avant Credit Card</NavLink>
                            </li>
                            <li className='sub_nav_item'>
                                <NavLink className='sub_nav_link' href='#'>See If You Qualify</NavLink>
                            </li>
                            <li className='sub_nav_item'>
                                <NavLink className='sub_nav_link' href='#'>MLS Forward Credit Card Powered By Avant</NavLink>
                            </li>
                        </ul>
                    </div>
                </ul>
                <ul className='top-nav-link'>
                    <li className='top-nav-item'>
                        <p className='nav_link'>
                            <NavLink id='nav-links' to="">LOANS</NavLink>
                        </p>
                    </li>
                    <div className='sub-nav'>
                        <ul className='sub_nav_lists'>
                            <li className='sub_nav_item'>
                                <NavLink className='sub_nav_link' href='#'>Debt Consolidation Loans</NavLink>
                            </li>
                            <li className='sub_nav_item'>
                                <NavLink className='sub_nav_link' href='#'>Emergency Loans</NavLink>
                            </li>
                            <li className='sub_nav_item'>
                                <NavLink className='sub_nav_link' href='#'>Home Improvement Loans</NavLink>
                            </li>
                            <li className='sub_nav_item'>
                                <NavLink className='sub_nav_link' href='#'>Installment Loans</NavLink>
                            </li>
                        </ul>
                    </div>
                </ul>
                <ul className='top-nav-link'>
                    <li className='top-nav-item'>
                        <p className='nav_link'>
                            <NavLink id='nav-links' to="">ABOUT US</NavLink>
                        </p>
                    </li>
                    <div className='sub-nav'>
                        <ul className='sub_nav_lists'>
                            <li className='sub_nav_item'>
                                <NavLink className='sub_nav_link' href='#'>Careers</NavLink>
                            </li>
                            <li className='sub_nav_item'>
                                <NavLink className='sub_nav_link' href='#'>Newsrooms</NavLink>
                            </li>
                        </ul>
                    </div>
                </ul>
                <ul className='top-nav-link'>
                    <li className='top-nav-item'>
                        <p className='nav_link'>
                            <NavLink id='nav-links' to="">BLOGS</NavLink>
                        </p>
                    </li>
                </ul>
                <ul className='top-nav-link'>
                    <li className='top-nav-item'>
                        <p className='nav_link'>
                            <NavLink id='nav-links' to="">SUPPORT</NavLink>
                        </p>
                    </li>
                    <div className='sub-nav'>
                        <ul className='sub_nav_lists'>
                            <li className='sub_nav_item'>
                                <NavLink className='sub_nav_link' href='#'>Contact Us</NavLink>
                            </li>
                            <li className='sub_nav_item'>
                                <NavLink className='sub_nav_link' href='#'>FAQ</NavLink>
                            </li>
                        </ul>
                    </div>
                </ul>
            </TopBarFlex> : null
}
        </Flex>
        <UilAlignJustify className="menu-button" onClick={handleClick} />
    </div>
  )
}

export default Navbar
