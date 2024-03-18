import './App.css'
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import ProtectedRoute from './components/ProtectedRoutes'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage setAuthenticated={setAuthenticated} />}></Route>
                    <Route path='/home' element={
                        <ProtectedRoute authenticated={authenticated}>
                            <HomePage />
                        </ProtectedRoute>
                    }></Route>

                </Routes>
            </Router>
        </>
    )
}


export default App
