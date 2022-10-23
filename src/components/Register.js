import React from 'react';

const Register = ({handleResister, handleEmailChange, handlePasswordBlur}) => {
    return (
        <div>
            <form onSubmit={handleResister}>
                <input onChange={handleEmailChange} type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password'/>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;