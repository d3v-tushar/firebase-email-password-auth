import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginREactBootstrap = () => {
    const handleLogin =(event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            alert('Password Must Contain Two Uppercase Letter');
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div className='w-25 m-auto my-5'>
            <h3>Please Login!</h3>
            <form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>

                <Button variant="primary" type="submit">Login</Button>
            </form>
        </div>
    );
};

export default LoginREactBootstrap;