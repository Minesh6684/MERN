import { BrowserRouter as Router, Routes, Route } from
'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Dashboard/>} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;