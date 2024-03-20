import './App.css'
import LandingPage from './components/LandingPage'
import HomePage from './components/HomePage'
import ProtectedRoute from './components/ProtectedRoutes'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    const [token, setToken] = useState('');
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage setToken={setToken}/>}></Route>
                    <Route path='/home' element={
                        <ProtectedRoute token={token}>
                            <HomePage />
                        </ProtectedRoute>
                    }></Route>

                </Routes>
            </Router>
        </>
    )
}


export default App
