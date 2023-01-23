import React, { useState } from 'react'
import '../../Styles/HeaderCreditCard.css'

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }



  return (
    <header className='header'>
        <div className='header-logo'>
            <a href="/" aria-label="Link to Avant homepage">
                <img alt="Avant logo" focusable="false" src="https://deu3j0r3u5d4v.cloudfront.net/avant/7.9.5/56be3b5dc3cc5d20d98ab6f8e7e0e1f0.svg" />
            </a>
        </div>
        <ul id="left-header-links" class="header__links header__links--desktop-only header__links--hide">
            <li>
                <a href="http://support.avant.com">Questions?</a>
            </li>
        </ul>
        <div id="my-account-dropdown" class="header__drawer-link">
            <a href="" data-header-nav="true" aria-controls="drawer" onClick={handleOpen} aria-expanded="true" id="header-drawer-link">My Account<i aria-hidden="true" focusable="false" class="header__icon-arrow header__icon-arrow--up"></i></a>
        </div>
        {open ? (<div id="drawer" aria-labelledby="header-drawer-link" data-header-drawer="" role="menu" class="header__drawer">
            <ul data-header-drawer="true">
                <li>
                    <a href="http://support.avant.com">Questions?</a>
                </li>
                <li>
                    <a href="/">Logout</a>
                </li>
            </ul>
        </div>) : null}
    </header>
  )
}

export default Header
