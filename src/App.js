import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ApplyCreditCard from './components/Credit-card/ApplyCreditCard';
import ApplyCreditCardSuccess from './components/Credit-card/ApplyCreditCardSuccess';
import CreditCard from './components/Credit-card/CreditCard';
import Header from './components/Header/Header';
import Loans from './components/LOANS/Loans';

function App() {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/credit-card' element={<CreditCard />} />
          <Route path='/credit-card/apply' element={<ApplyCreditCard />}/>
          <Route path='/credit-card/success' element={<ApplyCreditCardSuccess authorized={true}/>} />
          <Route path='/loans' element={<Loans />} />
          
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
