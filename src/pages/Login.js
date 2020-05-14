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
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        getLocalStorageInfo();
    }

    function getLocalStorageInfo() {
        if (sessionStorage.getItem('username') !== 'cameron') {
            setErrorMessage('Username is incorrect')
        } else if (sessionStorage.getItem('password') !== 'cameron23') {
            setErrorMessage('Password is incorrect')
        } else {
            //console.log('updateLoginStatus updated');
            props.updateLoginStatus();
        }
    }

    return (
        <div className=' [ container ] '>
            <h1 className=' [ text-center mb-5 ] '>Login</h1>
            <div className=' [ col-4 m-auto ] '>
                <form onSubmit={handleSubmit} className=' [ col-md-4 m-auto ] '>
                <label >Username</label>
                <div className=" [ input-container ] ">
                        <i className="fa fa-user form-input-icon"></i>
                        <input type='text'
                        name='username'
                        onChange={handleChange}
                        className=' [ form-input form-input-contact col-12 ] '
                    />
                    </div>
                    
                    <label >Password</label>
                <div className=" [ input-container ] ">
                <i class="fa fa-key form-input-icon "></i>                        
                <input type='password'
                        name='password'
                        onChange={handleChange}
                        className=' [ form-input form-input-contact col-12 ] '
                    />
                    </div>
                    {
                        errorMessage !== undefined && <div><p className=' [ errorMessage ] '>{errorMessage}</p></div>
                    }
                    <input type='submit' className=' [ btn ] ' />
                </form>
            </div>
        </div>
    );

}