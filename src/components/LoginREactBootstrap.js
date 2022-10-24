import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginREactBootstrap = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Google Sign in
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error => {
            console.error(error.message)
        })
    }

    // Facebook Sign in
    const handleFacebookSignIn = () =>{
        signInWithPopup(auth, facebookProvider)
        .then(result =>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch(error =>{
            console.error(error.message)
        })
    }

    // Github Sign in
    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const user = result.user;
            setUser(user)
            console.log(user)
        })
        .catch(error =>{
            console.error(error.message)
        })
    }

    // Email-Passwoed Sign in
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
            setUser(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    const handleSignOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({})
        })
        .catch(error =>{
            console.error(error.message)
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
            <br />
            <p>Other Sign in Options</p>
            {
                user.uid? <div>
                    <button onClick={handleSignOut}>Sign Out</button>
                    <p>{user.displayName}</p>
                    <p><small>{user.email}</small></p>
                </div> :
                <div>
                    <button onClick={handleGoogleSignIn}>Google Sign In</button>
                    <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
                    <button onClick={handleGithubSignIn}>Github Sign In</button>
                </div>
            }
            <br />
            <p><small>New On this website? Please <Link to='/'>Register</Link></small></p>
        </div>
    );
};

export default LoginREactBootstrap;