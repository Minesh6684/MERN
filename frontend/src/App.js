import { BrowserRouter as Router, Routes, Route } from
'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import ActiveDonations from './components/ActiveDonations';
import CompleteDonations from './components/CompleteDonations';
import AllActiveDonations from './components/AllActiveDonations';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <div className='app'>
          <Routes>
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/' element={<Dashboard/>} />
            <Route path='/active_donations' element={<ActiveDonations/>} />
            <Route path='/completed_donations' element={<CompleteDonations/>} />
            <Route path='/all_active_donations' element={<AllActiveDonations/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;