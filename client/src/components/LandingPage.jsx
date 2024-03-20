import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from './SignupForm'

function LandingPage({setToken}) {
    const [toggleSignup, setToggleSignup] = useState(false);

    function toggleForm(e) {
        e.preventDefault();
        setToggleSignup(!toggleSignup);
    }

    return (
        <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-stone-100">
            <div className='flex flex-col items-center justify-center bg-gray-200 w-[500px] h-[500px] rounded-lg shadow-md'>
                {
                    toggleSignup ? <SignupForm /> : <LoginForm setToken={setToken}/>
                }
                <div className="text-center mt-[10px]">
                    {toggleSignup ? <span>Already have an account? <span className="text-blue-500 hover:underline cursor-pointer" onClick={toggleForm}>Login</span></span> : 
                    <span>Don't have an account? <span className="text-blue-500 hover:underline cursor-pointer" onClick={toggleForm}>Signup</span></span> }
                </div>
            </div>
        </div>
    )
}

export default LandingPage;