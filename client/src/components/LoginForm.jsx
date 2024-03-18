import {useNavigate} from 'react-router-dom';

function LoginForm() {
    function handleOnSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" />

            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" />

            <button type="submit">Submit</button>
        </form>
    );
}
export default LoginForm;