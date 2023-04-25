import React from 'react';
import './Login.css';
import logo from '../images/logo2.png'
import background from '../images/background.jpg'
import {signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth'

import {auth, provider, provider2, providerFacebook} from '../firebase/firebase.init';
import Navbar from './Navbar';

const Login = () => {
    const handlesignIn = () => {
        signInWithPopup(auth, provider) 
        .then(result => {
        const user = result.user;
        console.log(user);
        })
        .catch(error=>{
          console.error('error', error);
        })
          }

        const handleWithGit = () => {
            signInWithPopup(auth, provider2)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error=> {
                console.error('error', error);
            })
        }

        const handleWithFacebook = () => {
            signInWithPopup(auth, providerFacebook)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error=> {
                console.error('error', error);
            })
        }

        const handleSubmit = (event) => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log(email, password);
            createUserWithEmailAndPassword(auth, email, password) 
            .then(result => {
                const user = result.user;
                console.log(user);
            })

            .catch(error => {
                console.error('error', error);
            })
        }
    return (
    <div>
        

        <div className='login-back'>
        <Navbar></Navbar>
            <div className=' logo-form mt-5' id='logo'>
            <img className='logo' src={logo} alt="" />
        </div> 

        {/* Need to use a <form></form> and include all the form items into it */}

        <div className='container'>
        
            <div className='login-form'>
                <div className='form-row px-2'>
                    <input type="text" placeholder='email' className='form-control mt-2' id='email' name='email'  />
                </div>
            
                <div className='form-row px-2'>
                    <input type="password" placeholder='Password' className='form-control mt-2 required' id='password' name='password' />    
                </div>

            
                <div className='d-flex justify-content-center'>
                    <button onClick={handleSubmit} id='login' className='btn btn-primary mt-4'>Login</button>
                    
                </div>
            </div>
           
           
        </div>

        <div className='btn-class'>

        <button className='btn btn-secondary mx-2' onClick={handlesignIn}>
        <span> <i class="fa-brands fa-google"></i> </span>Google
      </button>

      <button className='btn btn-secondary mx-2' onClick={handleWithFacebook}>
        <span> <i class="fa-brands fa-facebook"></i> </span> Facebook
      </button>

      <button className='btn btn-secondary mx-2' onClick={handleWithGit}>
        <span> <i class="fa-brands fa-github"></i> </span> Github
      </button>

        </div>
        
    </div>
        </div>

        
            
       
       
    );
};

export default Login;