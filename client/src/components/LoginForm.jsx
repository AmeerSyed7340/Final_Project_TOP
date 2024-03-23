import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function LoginForm({setToken, setUser}) {
    //states to handle input fields 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    //Hanlde the change to input fields
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    function handleOnSubmit(event) {
        event.preventDefault();

        fetch('http://127.0.0.1:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/JSON'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => response.json())
        .then(data => {{
            console.log('Success:', data);
            setToken(data.token);
            setUsername('');
            setPassword('');
            setUser(data.user);
            navigate('/home')
            
        }})
        .catch((error) => console.error('Error:', error))
    }

    return (

        <form onSubmit={handleOnSubmit} className='w-full max-w-xs p-6 bg-white rounded-lg shadow-md'>
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                <input type="text" name="username" id="username" value={username} onChange={handleUsernameChange} className="mt-1 px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full" />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} className="mt-1 px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full" />
            </div>

            <div className="flex justify-center">
                <button type="submit" className='border border-gray-300 rounded-lg px-4 py-2 w-full bg-blue-200 hover:bg-blue-400'>Log In</button>
            </div>
        </form>


    );
}
export default LoginForm;