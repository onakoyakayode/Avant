import React from 'react'
import { Button } from '../../Styled/Button.styled'
import { Flex } from '../../Styled/Flex.styled'
import { H1 } from '../../Styled/Text.styled';
import { UilAngleRight } from '@iconscout/react-unicons';
import { NavLink } from 'react-router-dom';

const Headline = () => {
  return (
    <div className='headline'>
      <Flex alignItems="flex-start" className='headline-mobile'>
        <div className='headline-intro'>
            <H1 width="100%" color='#fff' fontSize="3em" lineHeight="1.3em">WE'RE HERE TO HELP YOU MOVE
                <span className='desktop-break'></span>
                <span className='headline-2'>FINANCIALLY</span>
                <span className='headline-2'>FORWARD</span>
            </H1>
            <p className='subheadline'>
                <span>
                  At Avant, we make it easier to reach your goals with tools and solutions designed to meet your needs.
                </span>
            </p>
            <div className='buttons'>
                <Flex gap="1em">
                    <NavLink to='/credit-card'>
                        <Button 
                            padding="12px 32px" 
                            color='#0d5bff' 
                            bgColor="#0d5bff" 
                            colorHover="#fff" 
                            borderColor="2px solid #fff" 
                            background="#fff"
                            fontSize="18px"
                            border="0px">

                            <UilAngleRight />
                                CREDIT CARDS
                        </Button>
                    </NavLink>
                    <NavLink to='/loans'>
                        <Button 
                            padding="12px 32px" 
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
        <div className='headline-img'>
            <img src='/images/headline-img.webp' alt='avant-img' />
        </div>
      </Flex>
      <div className='blck-bck'>
        <img src='/images/Avant_Log.webp' alt="black-pattern" />
      </div>
    </div>
  )
}

export default Headline;
