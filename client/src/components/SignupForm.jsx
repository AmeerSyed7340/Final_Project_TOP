function SignupForm() {
    function handleOnSubmit(event) {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleOnSubmit} className='w-full max-w-xs p-6 bg-white rounded-lg shadow-md'>
            <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                <input type="text" name="username" id="username" className="mt-1 px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full" />
            </div>

            <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                <input type="password" name="password" id="password" className="mt-1 px-3 py-2 border shadow-sm border-gray-300 rounded-md w-full" />
            </div>

            <div className="flex justify-center">
                <button type="submit" className='border border-gray-300 rounded-lg px-4 py-2 w-full bg-blue-200 hover:bg-blue-400'>Sign Up</button>
            </div>
        </form>
    )
}

export default SignupForm;