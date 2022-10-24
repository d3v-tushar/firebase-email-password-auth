import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import app from '../firebase/firebase.init';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);
const RegisterReactBootstrap = () => {
    const [passwordError, setPasswordError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        setSuccess(false);
        setPasswordError('')
        const form = event.target;
        const name = form.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);

        //Password Validation (Regular Expression)
        if(!/(?=.*[A-Z/].*[A-Z])/.test(password)){
            setPasswordError('Please provide atleast two uppercase.');
            return;
        }
        if(password.length < 8){
            setPasswordError('Password should be atleast 8 characters.');
            return;
        }
        if(!/(?=.*[!@#$%*])/.test(password)){
            setPasswordError('Please use atleast 1 special character.');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setSuccess(true);
            // form.reset();
            updateUserName(name);
            sendVerificationEmail();
        })
        .catch(error =>{
            console.error('Error: ', error);
            setPasswordError(error.message);
        })
    }

    const updateUserName = (name) =>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            console.log('displayName Updated', name);
          }).catch((error) => {
            console.error(error)
          });
    }

    const sendVerificationEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(() =>{
            toast.success("Verification Email Sent!", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        })
        .catch(error =>{
            toast(error.message);
        })
    }
    return (
        <div className='w-25 m-auto my-5'>
            <h3 className='text-primary'>Please Register!!!</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter Email" required />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                    <p className='text-danger p-1 rounded bg-light'>{passwordError}</p>
                    {
                        success && <p className='text-success p-1 rounded bg-light'>User Created Successfully</p>
                    }
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='my-1'><small>Already have an account? Please <Link to='/login'>Login</Link></small></p>
            <ToastContainer />
        </div>
    );
};

export default RegisterReactBootstrap;