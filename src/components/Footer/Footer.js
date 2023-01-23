import React from 'react'
import FooterLegal from './FooterLegal'
import '../../Styles/Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <FooterLegal />
      <div className='footer-container'>
        <ul className='footer-list'>
          <li className='footer__logo-box'>
            <a data-event="home" href='/'>
              <img src='https://images.ctfassets.net/vrxttq978is8/6SdvyzDbMV9MmkQcpszGnR/f6e8670f5b37e5424fa2087aa8ea0ed9/logo-avant-slate-white.svg' alt='Avant Slate White Logo Registered Trademark' />
            </a>
          </li>
          <li className='footer__item'>
            <NavLink className='footer__link'>
              PRODUCTS
            </NavLink>
            <div className='drop-down'>
              <ul className='drop-down__list'>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='/credit-card'>Credit Card</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='/loans'>Loans</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='/emergency-loans'>Emergency Loans</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='/debt-consolidation-loans'>Debt Consolidation Loans</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='/home-improvement-loans'>Home Improvement Loans</a>
                </li>
              </ul>
            </div>
          </li>
          <li className='footer__item'>
            <NavLink className='footer__link'>
              SUPPORT
            </NavLink>
            <div className='drop-down'>
              <ul className='drop-down__list'>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='https://support.avant.com/' data-event="FAQ">FAQ</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='http://support.avant.com/article/234-how-can-i-contact-avant'>Contact Us</a>
                </li>
              </ul>
            </div>
          </li>
          <li className='footer__item'>
            <NavLink className='footer__link'>
              LEGAL
            </NavLink>
            <div className='drop-down'>
              <ul className='drop-down__list'>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='/terms-of-use'>Term of Use</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='/privacy'>Privacy</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='https://www.nmlsconsumeraccess.org'>NMLS Consumer Access</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='/accessibility'>Accessibility</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='/home-improvement-loans'>SCRA</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='/cardmember-agreement'>Avant Credit Card Cardmember Agreement</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='/credit-card/landing/mls-agreement'>MLS Forward Credit Card Cardmember Agreement</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='/licensure'>Licenses</a>
                </li>
              </ul>
            </div>
          </li>
          <li className='footer__item'>
            <NavLink className='footer__link'>
              CONNECT
            </NavLink>
            <div className='drop-down'>
              <ul className='drop-down__list'>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='https://www.facebook.com/avantforward'>Facebook</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='https://www.instagram.com/avantforward'>Instagram</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='https://twitter.com/avant_forward'>Twitter</a>
                </li>
                <li className='drop-down__item'>
                  <a className='drop-down__link' href='https://www.linkedin.com/company/avant-us'>LinkendIn</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
