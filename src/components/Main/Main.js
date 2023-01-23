import React from 'react'
import { Button } from '../../Styled/Button.styled'
import { Flex } from '../../Styled/Flex.styled'
import '../../Styles/Main.css'
import { UilAngleRight } from '@iconscout/react-unicons';
import { NavLink } from 'react-router-dom';

const Main = () => {
  return (
    <main className='main'>
        <svg class="decoration__left light" width="359" height="141" viewBox="0 0 359 141" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M71 0L152.743 141H194L112.257 0H71Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-11 0L70.7426 141H112L30.2574 0H-11Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M236 0L317.743 141H359L277.257 0H236Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M153 0L234.743 141H276L194.257 0H153Z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 141H-11.3099L-31 107.108V36L30 141Z"></path>
        </svg>
        <section className='main-section'>
            <Flex padding="0 1rem" className='small_section'>
                <div className='main-section-img'>
                    <img src='/images/card-app-lockup-mobile.png' alt='top-card' />
                </div>
                <div className='container-inner'>
                    <div className='content'>
                        <div className='intro'>
                            <h2 className='headline-one'>
                                SOLUTIONS FOR   
                                EVERY STEP OF
                                <span className='desktop-break'></span>
                                <span className='headline-two'>YOUR JOURNEY</span>
                            </h2>
                            <p className='subtext'>
                                Everyone’s financial life is different. That’s why we offer flexible choices, simple solutions and friendly support to help you keep moving forward, one step at a time. So whether you need a credit card, a loan to help cover the unexpected or a clear answer to a difficult question, we're here to help.
                            </p>
                            <NavLink to='/'>
                                <Button
                                    padding="12px 32px" 
                                    color='#0d5bff' 
                                    bgColor="#0d5bff" 
                                    colorHover="#fff" 
                                    borderColor="2px solid #0d5bff" 
                                    background="#fff"
                                    fontSize="18px"
                                    border="2px solid #0d5bff"
                                    margin="0.5em 0"
                                >
                                    <UilAngleRight />
                                    GET TO KNOW AVANT
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Flex>
            <svg class="small-triangles decoration__right primary" width="288" height="771" viewBox="0 0 288 771" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M266.195 526.708H342.4L304.29 460.728L266.195 526.708Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M217.781 606.383H293.986L255.876 540.403L217.781 606.383Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M284.896 287.3H361.101L322.991 221.32L284.896 287.3Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M236.433 367.071H312.638L274.528 301.091L236.433 367.071Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M139.46 526.708H215.665L177.555 460.728L139.46 526.708Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M188.019 446.889H264.224L226.114 380.909L188.019 446.889Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M91.0454 606.383H167.25L129.14 540.403L91.0454 606.383Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M175.15 690.622H251.355L213.245 624.642L175.15 690.622Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M126.735 770.442H202.94L164.83 704.461L126.735 770.442Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M48.415 690.622H124.62L86.51 624.642L48.415 690.622Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 770.442H76.205L38.095 704.461L0 770.442Z"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M253.472 770.442H329.676L291.567 704.461L253.472 770.442Z"></path>
            </svg>
        </section>
        <div className='bg-gray'>
            <div className='headline-div-padding'>
                <h2 className='headline-grid-one'>
                    TOOLS TO MAKE
                    <span className="desktop-break"></span>
                    <span className="headline-grid-two text-left align-left">LIFE EASIER</span>
                </h2>
                <div className="subtitle-div-width text-left align-left">
                    <p className="subtitle text-light-theme">
                        <span>We have the solutions to simplify your everyday financial tasks.</span>
                    </p>
                </div>
            </div>
            <div className="grid-two-columns undefined">
                <section className='block-card'>
                    <div className='cards-grid'>
                        <h2 class="headline-text-left align-left">CREDIT CARDS</h2>
                    </div>
                    <div className='two-class'>
                        <div className='two-class-img'>
                            <img src="/images/Credit_card_Blk.png" alt='Credit Card Category Illustration'/>
                        </div>
                        <div className='two-columns_inner'>
                            <div className='two-columns-blk'>
                                <div className='two-col-intro'>
                                    <p class="subtitle">The buying power you want</p>
                                    <p class="subtext ellipsis">Get closer to your financial goals with clear and transparent credit limits from $300-$2,000.</p>
                                </div>
                            </div>
                            <NavLink to='credit-card/apply' className='two-col-btn'>
                                <Button
                                    padding="12px 32px" 
                                    color='#0d5bff' 
                                    bgColor="#0d5bff" 
                                    colorHover="#fff" 
                                    borderColor="2px solid #0d5bff" 
                                    background="#fff"
                                    fontSize="18px"
                                    border="2px solid #0d5bff"
                                    margin="0.5em 0"
                                >
                                    <UilAngleRight />
                                    APPLY NOW
                                </Button>
                            </NavLink>
                        </div>
                        
                        
                    </div>
                </section>
                <section className='block-card'>
                    <div className='cards-grid'>
                        <h2 class="headline-text-left align-left">LOANS</h2>
                    </div>
                    <div className='two-class'>
                        <div className='two-class-img'>
                            <img src="/images/Loan_Block_Card_Image.png" alt='Credit Card Category Illustration'/>
                        </div>
                        <div className='two-columns_inner'>
                            <div className='two-columns-blk'>
                                <div className='two-col-intro'>
                                    <p class="subtitle">Realize your personal goals</p>
                                    <p class="subtext ellipsis">Borrow $2,000 - $35,000* for things like a medical bill, a home project, or an unexpected expense.</p>
                                </div>
                            </div>
                            <NavLink href='/' className='two-col-btn'>
                                <Button
                                    padding="12px 32px" 
                                    color='#0d5bff' 
                                    bgColor="#0d5bff" 
                                    colorHover="#fff" 
                                    borderColor="2px solid #0d5bff" 
                                    background="#fff"
                                    fontSize="18px"
                                    border="2px solid #0d5bff"
                                    margin="0.5em 0"
                                >
                                    <UilAngleRight />
                                    CHECK OPTIONS
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <section className='block_card blue-bg'>
            <div className='container-outer'>
                <div className='outer-blue-bg'>
                    <div className='gatsby-img'>
                        <div className='blue-bg-intro'>
                            <h2 class="headline-one text-left align-left">REDEEM YOUR 
                                <span class="desktop-break"></span>
                                <span class="headline-two text-left align-left">MAIL OFFER</span>
                            </h2>
                        </div>
                        <div className='buttons'>
                            <Flex gap="1em">
                                <NavLink href='/credit-card'>
                                    <Button 
                                        padding="18px 32px" 
                                        color='#0d5bff' 
                                        bgColor="#0d5bff" 
                                        colorHover="#fff" 
                                        borderColor="2px solid #fff" 
                                        background="#fff"
                                        fontSize="18px"
                                        border="0px"
                                        width="fit-content">
                                        
                                        <UilAngleRight />
                                            CREDIT CARDS
                                    </Button>
                                </NavLink>
                                <NavLink href='/loans'>
                                    <Button 
                                        padding="18px 32px" 
                                        color='#0d5bff' 
                                        bgColor="#0d5bff" 
                                        colorHover="#fff" 
                                        borderColor="2px solid #fff" 
                                        background="#fff"
                                        fontSize="18px"
                                        border="0px">
                                        <UilAngleRight />
                                            LOANS
                                    </Button>
                                </NavLink>
                            </Flex>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <div className='bg-gray'>
            <div class="headline-div-padding text-left align-left">
                <h2 class="headline-grid-one text-left align-left">WE’RE ON YOUR SIDE AND  
                    <span class="desktop-break"></span>
                    <span class="headline-grid-two text-left align-left"> IN YOUR CORNER</span>
                </h2>
                <div class="subtitle-div-width text-left align-left">
                    <p class="subtitle text-light-theme">
                        <span>We provide support to help you stay on track and keep moving forward toward success.</span>
                    </p>
                </div>
            </div>
            <div className='three-grid-col'>
                <section className='block-card box-left'>
                    <div className='grid-cards'>
                        <h2 class="headline-card text-left align-left">WE PROTECT YOUR PRIVACY</h2>
                    </div>
                    <div className='grid-details'>
                        <div className='grid-img'>
                            <img src='https://images.ctfassets.net/vrxttq978is8/1wZPvvbIviwrXCJAKGGGGn/3bc254d1de2eedee15d11b42ed8531a3/Group_2834.png' alt='bank' />
                        </div>
                        <div class="container__inner cards-padding">
                            <div class="content undefined  has-image ">
                                <div class="intro collapse">
                                    <p class="subtext ellipsis">We use end-to-end industry-standard encryption and state-of-the-art technology to make sure your data stays safe and secure.</p>
                                </div>
                                <div class="buttons-undefined">
                                    <NavLink width="100%" to='/'>
                                        <Button
                                            padding="12px 32px" 
                                            color='#0d5bff' 
                                            bgColor="#0d5bff" 
                                            colorHover="#fff" 
                                            borderColor="2px solid #0d5bff" 
                                            background="#fff"
                                            fontSize="18px"
                                            border="2px solid #0d5bff"
                                            margin="0.5em 0"
                                            width="100%"
                                        >
                                            <UilAngleRight />
                                            LEARN MORE
                                        </Button>
                                    </NavLink>   
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='block-card box-left'>
                    <div className='grid-cards'>
                        <h2 class="headline-card text-left align-left">REAL HELP FROM REAL PEOPLE</h2>
                    </div>
                    <div className='grid-details'>
                        <div className='grid-img'>
                            <img src='https://images.ctfassets.net/vrxttq978is8/7tB6FqfqvrkgjWvOyHBQjd/9b81cef3c17cc7a7f954119d54e44762/Customer-service-illo.png' alt='bank' />
                        </div>
                        <div class="container__inner cards-padding">
                            <div class="content undefined  has-image ">
                                <div class="intro collapse">
                                    <p class="subtext ellipsis">We provide clear answers to your questions in whatever way is most convenient for you: email or phone.</p>
                                    <br/>
                                </div>
                                <div class="buttons-undefined">
                                    <NavLink width="100%" to='/'>
                                        <Button
                                            padding="12px 32px" 
                                            color='#0d5bff' 
                                            bgColor="#0d5bff" 
                                            colorHover="#fff" 
                                            borderColor="2px solid #0d5bff" 
                                            background="#fff"
                                            fontSize="18px"
                                            border="2px solid #0d5bff"
                                            margin="0.5em 0"
                                            width="100%"
                                        >
                                            <UilAngleRight />
                                            GET IN TOUCH
                                        </Button>
                                    </NavLink>   
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='block-card box-left'>
                    <div className='grid-cards'>
                        <h2 class="headline-card text-left align-left">COMMON QUESTIONS ANSWERED</h2>
                    </div>
                    <div className='grid-details'>
                        <div className='grid-img'>
                            <img src='https://images.ctfassets.net/vrxttq978is8/3Uf0CZMokOFDdEXZ3OjAiW/1c9d1cf963616c0f0c6875f1f3e49d00/FAQ.png' alt='bank' />
                        </div>
                        <div class="container__inner cards-padding">
                            <div class="content undefined  has-image ">
                                <div class="intro collapse">
                                    <p class="subtext ellipsis">We have an extensive library of FAQs to help you better understand Avant and our financial solutions.</p>
                                    <br />
                                </div>
                                <div class="buttons-undefined">
                                    <NavLink width="100%" to='/'>
                                        <Button
                                            padding="12px 32px" 
                                            color='#0d5bff' 
                                            bgColor="#0d5bff" 
                                            colorHover="#fff" 
                                            borderColor="2px solid #0d5bff" 
                                            background="#fff"
                                            fontSize="18px"
                                            border="2px solid #0d5bff"
                                            margin="0.5em 0"
                                            width="100%"
                                        >
                                            <UilAngleRight />
                                            SEE FAQS
                                        </Button>
                                    </NavLink>   
                            
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <section className='blue-bgs'>
            <div className='section-hero'>
                <div className='section-hero-flex'>
                    <div className='intro'>
                    <h2 class=" text-center align-center">Go Ahead and Explore Your Financial Choices. It Won’t Impact Your Credit Score.</h2>
                    </div>
                    <Flex gap="1em" className='check-button'>
                    <NavLink to='/credit-card/apply'>
                        <Button 
                            padding="15px 32px" 
                            color='#0d5bff' 
                            bgColor="#0d5bff" 
                            colorHover="#fff" 
                            borderColor="2px solid #fff" 
                            background="#fff"
                            fontSize="18px"
                            border="0px">

                            <UilAngleRight />
                                APPLY FOR A CREDIT CARD
                        </Button>
                    </NavLink>
                    <NavLink to='/loans'>
                        <Button 
                            padding="15px 32px" 
                            color='#0d5bff' 
                            bgColor="#0d5bff" 
                            colorHover="#fff" 
                            borderColor="2px solid #fff" 
                            background="#fff"
                            fontSize="18px"
                            border="0px">
                            <UilAngleRight />
                                CHECK YOUR LOAN OPTIONS
                        </Button>
                    </NavLink>
                </Flex>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Main
