import React from 'react';
import Form from 'react-bootstrap/Form';
import './Login.css';
import logo from '../images/logo2.png'
import background from '../images/background.jpg'
import {signInWithPopup, createUserWithEmailAndPassword} from 'firebase/auth'

import {auth, provider, provider2, providerFacebook} from '../firebase/firebase.init';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();
    

        const handleSubmit = (event) => {
            event.preventDefault();
            const form = event.target;      ///changing it from onclick to onsubmit
            const name = form.name.value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            console.log(name, email, password);
            // createUserWithEmailAndPassword(auth, email, password) 
            // .then(result => {
            //     const user = result.user;
            //     navigate('/Dashboard')
                
                
            // })

            // .catch(error => {
            //     console.error('error', error);
            // })
        }
    return (
    <div>
        

        <div onSubmit={handleSubmit} className='login-back'>
        <Navbar></Navbar>
            <div className=' logo-form mt-5' id='logo'>
            <img className='logo' src={logo} alt="" />
        </div> 

        {/* Need to use a <form></form> and include all the form items into it */}

        {/* <form className=' form-content w-50'>
        
            <div className='form-items'>
            <div className='form-row pt-3'>
                    <input type="text" placeholder='Company Name' className='form-control mt-2' id='name' name='name'  />
                </div>

                <div className='form-row'>
                    <input type="email" placeholder='Email' className='form-control mt-2' id='email' name='email'  />
                </div>
            
                <div className='form-row'>
                    <input type="password" placeholder='Password' className='form-control mt-2 required' id='password' name='password' />    
                </div>

                <div className='form-row'>
                    <input type="password" placeholder='Confirm Password' className='form-control mt-2 required' id='cpassword' name='cpassword' />    
                </div>

            
                <div className='d-flex justify-content-center'>
                    
                    <button type='submit'  id='login' className='btn btn-primary mt-4'>Login
                    </button>
                    
                   
                    
                </div>
            </div>
           
           
        </form> */}


    <Form className='w-25 form-wrapper mx-auto mt-5'>
    <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="text" placeholder="Company Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>
      <button className='btn btn-primary'> SignUp</button>
      <p className='text-center'>
      Already have an account? <a href='/login'>Login</a>
    </p>
      
    </Form>

    

        
    </div>
        </div>

        
            
       
       
    );
};
    


export default SignUp;