import React from 'react'
import Navbar from '../Navbar/Navbar';
import TopBar from '../TopBar/TopBar';
import "../../Styles/Credit-card.css";
import { UilAngleRight } from '@iconscout/react-unicons';
import { Button } from '../../Styled/Button.styled';
import Footer from '../Footer/Footer';
import { useLocation } from 'react-router-dom';

const CreditCard = () => {

    const pathname = useLocation()

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);
  return (
    <div className='credit-card'>
      <TopBar />
      <Navbar />
      <div className='headline'>
        <div className='headline-left'>
            <div className='headline-left-intro'>
                <h1>A CREDIT CARD FOR EVERY KIND OF
                    <span class="desktop-break"></span>
                    <span class="headline-two"> FINANCIAL JOURNEY</span>
                </h1>
                <p className='sub-headline'>
                    <span>Whatever your goals, an Avant Credit Card can help you get closer to them. </span>
                </p>
            </div>
            <div className='buttons'>
                <a href='/credit-card/apply'>
                    <Button 
                        padding="15px 35px" 
                        color='#fff' 
                        bgColor="#fff" 
                        colorHover="#0d5bff" 
                        borderColor="2px solid #0d5bff" 
                        // background="#fff"
                        background="#0d5bff"
                        fontSize="19px"
                        border="2px solid #fff">

                        <UilAngleRight />
                            SEE IF YOU QUALIFY
                    </Button>
                </a>
                <a href='#'>
                    <Button 
                        padding="15px 35px" 
                        color='#0d5bff' 
                        bgColor="#0d5bff" 
                        colorHover="#fff" 
                        borderColor="2px solid #0d5bff" 
                        background="#fff"
                        fontSize="19px"
                        border="2px solid #0d5bff">
                        <UilAngleRight />
                            REDEEM YOUR MAIL OFFER
                    </Button>
                </a>
            </div>
        </div>
        <div className='headline-right'></div>
      </div>
      <section className='bg-dark'>
        <svg class=" bg-dark-primary primary" width="301" height="749" viewBox="0 0 301 749" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M298.191 187L199 374H249.063L301 276.087V187H298.191Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M299 375H301V371L299 375Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M248 187L148.978 374H99L198.022 187H248Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M299 375L199.978 562H150L249.022 375H299Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M250 562H300.064L301 560.238V466L250 562Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M198 375L98.9781 562H49L148.022 375H198Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M300.065 562L201 749H251L301 654.617V562H300.065Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M199.022 562L100 749H149.978L249 562H199.022Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M99.0212 562L0 749H49.9774L149 562H99.0212Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M248 187H298.184L301 181.687V87L248 187Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M247.021 0L148 187H197.978L297 0H247.021Z"></path>
        </svg>
        <div className='bg-dark-1'>
            <div className='big-dark-intro'>
                <h1 className='headline-one'>
                    YOUR PATH TO HEALTHY CREDIT
                    <span className='desktop-break'></span>
                    <span className='headline-two'>STARTS HERE</span>
                </h1>
                <p className='sub-headline big-dark'>
                    <span>With an Avant Credit Card, you can get the buying power you want and take steps toward building your credit at the same time.</span>
                </p>
            </div>
            <div className='start-intro'>
                <div className='start-intro-1'>
                    <div className='start-intro-img'>
                        <img src='https://images.ctfassets.net/vrxttq978is8/1IxOkChYxGcXH4vQLsJU6u/49d2b88852b3e117091f2c50cf887611/Apply_Online_A.png' alt='' />
                    </div>
                    <h2>
                        APPLYING IS EASY
                    </h2>
                    <p>
                        <span>Just fill out our simple application and you’ll get a decision in minutes.</span>
                    </p>
                </div>
                <div className='start-intro-1'>
                    <div className='start-intro-img'>
                        <img src='https://images.ctfassets.net/vrxttq978is8/5MKeyqpcFkj5w6K45Kczj0/58a5bedc4d90e0376a99bb896b118af3/No_Hidden_Fees.png' alt='' />
                    </div>
                    <h2>
                        NO HIDDEN FEES
                    </h2>
                    <p>
                        <span>No need to worry about hidden fees or surprises. Zero overlimit fees,^ $0 security deposit, $0 fraud liability.*</span>
                    </p>
                </div>
                <div className='start-intro-1'>
                    <div className='start-intro-img'>
                        <img src='https://images.ctfassets.net/vrxttq978is8/kcdbPfSrbU4YJzWTkCwrg/3c0574adf232af9cfaaf1b6a051a0714/Boost_Your_Score_A.png' alt='' />
                    </div>
                    <h2>
                        BOOST YOUR SCORE
                    </h2>
                    <p>
                        <span>Watch your credit score climb as you use your card responsibly and pay off your balance on time.</span>
                    </p>
                </div>
                <div className='start-intro-1'>
                    <div className='start-intro-img'>
                        <img src='https://images.ctfassets.net/vrxttq978is8/1MtQEBIBNi9AeF8Xtpx6OE/fcea73fc1da617d1fcae9b307975616b/Wallet.png' alt='' />
                    </div>
                    <h2>
                        PROACTIVE CREDIT LINE INCREASES
                    </h2>
                    <p>
                        <span>If you qualify for a higher credit limit, we’ll let you know.</span>
                    </p>
                </div>
                <div className='start-intro-1'>
                    <div className='start-intro-img'>
                        <img src='https://images.ctfassets.net/vrxttq978is8/7pmkpPdX5Hv74thYRDG4j9/308b8631faaf24a95392718497a40dc5/App.png' alt='' />
                    </div>
                    <h2>
                        TAP INTO THE APP
                    </h2>
                    <p>
                        <span>Manage your credit from anywhere with the Avant Credit app.</span>
                    </p>
                </div>
                <div className='start-intro-1'>
                    <div className='start-intro-img'>
                        <img src='https://images.ctfassets.net/vrxttq978is8/C8L8c1etjPE2qbq7he298/d13ae75aa5705c261e3fccc3f429ba89/Customer_Service.png' alt='' />
                    </div>
                    <h2>
                        THE PERSONAL TOUCH
                    </h2>
                    <p>
                        <span>Get answers via chat, phone and in-app messaging.</span>
                    </p>
                </div>
               
            </div>
        </div>
        <div className='buttons btn-drk'>
            <a href='/credit-card'>
                <Button 
                    padding="15px 35px" 
                    color='#fff' 
                    bgColor="#fff" 
                    colorHover="#0d5bff" 
                    borderColor="2px solid #0d5bff" 
                    // background="#fff"
                    background="#0d5bff"
                    fontSize="19px"
                    border="2px solid #fff">

                    <UilAngleRight />
                        SEE IF YOU QUALIFY
                </Button>
            </a>
        </div>
      </section>
        <section class="people-use white text-left null">
            <div class="container__inner">
                <h5 class="pre-heading">THE CARD THAT FITS YOUR</h5>
                <h4 class="people-use__header heading-sub-bold heading-section">FINANCIAL GOALS</h4>
            </div>
        </section>
      <section className='simple-card'>
        <div className='simple-card-headline'>
            <h5>A CREDIT CARD THAT KEEPS IT SIMPLE.</h5>
            <p className='sub-heading'>No hidden fees, no hassle. Pay for what you need while building your credit with responsible use.</p>
            <a href='/credit-card'>
                <Button 
                    padding="15px 35px" 
                    color='#fff' 
                    bgColor="#fff" 
                    colorHover="#0d5bff" 
                    borderColor="2px solid #0d5bff" 
                    // background="#fff"
                    background="#0d5bff"
                    fontSize="19px"
                    border="2px solid #fff">

                    <UilAngleRight />
                        SEE IF YOU QUALIFY
                </Button>
            </a>
        </div>
        <div className='simple-card-img'>
            <img src='https://images.ctfassets.net/vrxttq978is8/nhVia2Rl2CjTvXW9tnpp9/e2101f15ad8a65455ae85eec14267441/Group_2848.png?w=549&h=469&q=50&fm=webp' alt='' />
        </div>
      </section>
      <svg class="decoration__left primary" width="247" height="749" viewBox="0 0 247 749" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-51.191 187L48 374H-2.06306L-54 276.087V187H-51.191Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-1 187L98.0219 374H148L48.9781 187H-1Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-52 375L47.0219 562H97L-2.02192 375H-52Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M49 375L148.022 562H198L98.9781 375H49Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-53.0646 562L46 749H-3.99963L-54 654.617V562H-53.0646Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M47.9781 562L147 749H97.0219L-2 562H47.9781Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M147.979 562L247 749H197.023L98 562H147.979Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.0211868 0L99 187H49.0219L-50 0H-0.0211868Z"></path>
        </svg>
      <section className='bg-gray bg-gray-lit'>
        <div class="headline-div-padding text-center align-center">
            <h2 class="headline-grid-one text-center align-center">HERE’S HOW 
                <span class="mobile-break"></span>
                <span class="headline-grid-two text-center align-center">IT WORKS</span>
            </h2>
            <div class="subtitle-div-width text-center align-center">
                <p class="subtitle text-light-theme">
                    <span>Applying for and using an Avant Credit Card is a simple, 3-step process. </span>
                </p>
            </div>
            <div className='start-intro bg-gray-start-intro'>
                <div className='start-intro-1'>
                    <div className='start-intro-img'>
                        <img src='https://images.ctfassets.net/vrxttq978is8/533TXXVaJodqhizuZaUizn/fc4fca6c8575cce43b2fa01658242661/Numerals_1.png' alt='' />
                    </div>
                    <h2>
                        SEE IF YOU QUALIFY
                    </h2>
                    <p>
                        <span>Checking your eligibility won’t affect your credit score. If you qualify, our simple application takes just a few minutes.</span>
                    </p>
                </div>
                <div className='start-intro-1'>
                    <div className='start-intro-img'>
                        <img src='https://images.ctfassets.net/vrxttq978is8/70b7qJiG6HpSPwdAGImsXv/7d05e3315bbd280687cfda8c01e66d5c/Numerals_2.png' alt='' />
                    </div>
                    <h2>
                        GET A FAST DECISION
                    </h2>
                    <p>
                        <span>You like to move fast. We do, too. That’s why we provide decisions as quickly as possible.</span>
                    </p>
                </div>
                <div className='start-intro-1'>
                    <div className='start-intro-img'>
                        <img src='https://images.ctfassets.net/vrxttq978is8/7tONBp38AmsRR7pcUKXntk/55ef6be7697a28d98bd8cab5e2dcba92/Numerals_3.png' alt='' />
                    </div>
                    <h2>
                        USE YOUR CREDIT RESPONSIBLY
                    </h2>
                    <p>
                        <span>If approved and verified your credit card will be issued. You can manage your credit card and payments through the convenient Avant Credit app.</span>
                    </p>
                </div>
            </div>
        </div>
        <div className='buttons'>
             <a href='/credit-card'>
                <Button 
                    padding="15px 35px" 
                    color='#fff' 
                    bgColor="#fff" 
                    colorHover="#0d5bff" 
                    borderColor="2px solid #0d5bff" 
                    // background="#fff"
                    background="#0d5bff"
                    fontSize="19px"
                    border="2px solid #fff">

                    <UilAngleRight />
                        SEE IF YOU QUALIFY
                </Button>
            </a>
        </div>
      </section>
      <section className='bg-white'>
        <div className='people-use'>
            <div class="container__inner">
                <h5 class="pre-heading">CREDIT DETAILS</h5>
                <h4 class="people-use__header heading-sub-bold heading-section">BY THE NUMBERS</h4>
                <p class="leadership__text general-text">We’ll help you find the right terms for your financial journey.</p>
            </div>
        </div>
        <div class="stats__stripes">
            <div class="stats__row stats__background-primary">
                <div class="stats__row-content">
                    <div class="stats__column">
                        <p class="stats__range">Ranging From</p>
                        <p class="stats__text ">$0-$59<sup class="stats__asterisk">^</sup></p>
                        </div>
                            <h5 class="stats__heading">ANNUAL FEE</h5>
                        </div>
                    </div>
                    <div class="stats__row stats__background-secondary">
                        <div class="stats__row-content">
                            <div class="stats__column">
                                <p class="stats__range">Ranging From</p>
                                <p class="stats__text ">$300-$2,000</p>
                            </div>
                            <h5 class="stats__heading">CREDIT LIMIT</h5>
                        </div>
                    </div>
                    <div class="stats__row stats__background-tertiary">
                        <div class="stats__row-content">
                            <div class="stats__column">
                                <p class="stats__range">Ranging From</p>
                                <p class="stats__text ">29.24%-29.99%<sup class="stats__asterisk">^</sup></p>
                            </div>
                            <h5 class="stats__heading">VARIABLE APR</h5>
                        </div>
                    </div>
                </div>
                <section class="people-use use">
                    <p class="legal-statement__text stats-legal-text">^Pricing may vary based on offers provided through different channels. If you received an offer in the mail, please refer to your letter for the specific terms offered. For more information regarding other account terms, see <a class="flat-link--grey-dark" href="/cardmember-agreement/">rates and terms</a>.</p>
                </section>
      </section>
      
      <Footer />
    </div>
  )
}

export default CreditCard;