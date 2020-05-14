import React, { useState } from 'react';


export default function Login(props) {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })
    const { username, password } = inputs;
    const [errorMessage, setErrorMessage] = useState(undefined);

    function handleChange(input) {
        const { name, value } = input.target;
        setInputs(inputs => ({
            ...inputs,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        //console.log('submit clicked');
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        getLocalStorageInfo();
    }

    function getLocalStorageInfo() {
        if (localStorage.getItem('username') !== 'cameron') {
            setErrorMessage('Username is incorrect')
        } else if (localStorage.getItem('password') !== 'cameron23') {
            setErrorMessage('Password is incorrect')
        } else {
            //console.log('updateLoginStatus updated');
            props.updateLoginStatus();
        }
    }

    return (
        <div className=' [ container-fluid ] '>
            <h1 className=' [ text-center mb-5 mt-5 pt-5 ] '>Login</h1>
            <div className=' [ row m-auto ] '>
                <form onSubmit={handleSubmit} className=' [ col-md-4 m-auto ] '>
                    {
                        errorMessage !== undefined && <div><p className=' [ errorMessage ] '>{errorMessage}</p></div>
                    }
                    <p>Enter a username</p>
                    <input type='text'
                        name='username'
                        onChange={handleChange}
                        className=' [ form-control ] '
                    />
                    <br />
                    <p></p>
                    <p>Enter a password</p>
                    <input type='password'
                        name='password'
                        onChange={handleChange}
                        className=' [ form-control ] '
                    />
                    <br />
                    <input type='submit' className=' [ btn ] ' />
                </form>
            </div>
        </div>
    );

}