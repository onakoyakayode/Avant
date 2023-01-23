import React, { useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer';
import '../../Styles/ApplyCardSuccess.css'
import { UilAngleRight } from '@iconscout/react-unicons';
import { Button } from '../../Styled/Button.styled';

const ApplyCreditCardSuccess = ({authorized, items}) => {

    let navigate = useNavigate();

    const [datas, setData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/posts');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
        console.log(datas)
   
    if (!authorized) {
        return navigate('/')
    }
   }, [datas])

   

  return (
    <div>
        <Navbar />
        <div className='apply-card-success'>
            <div className='card-success-msg intro'>
                <h1 className='headline-one'>
                    Thank You for applying for
                    <span className='headline-2'>AVANT Credit Card</span>
                </h1>
                <div className='card-success-text'>
                    <div className='card-success-left'>
                        <p>
                            You can go ahead and apply for loan.
                        </p>
                    </div>
                </div>
                <NavLink to='/loan'>
                    <Button
                        padding="12px 32px" 
                        color='#fff' 
                        bgColor="#fff" 
                        colorHover="#0d5bff" 
                        borderColor="2px solid #0d5bff" 
                        background="#0d5bff"
                        fontSize="18px"
                        border="2px solid #0d5bff"
                        margin="0.5em 0"
                    >
                        <UilAngleRight />
                        LOANS
                    </Button>
                </NavLink>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ApplyCreditCardSuccess
