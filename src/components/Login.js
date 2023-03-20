import React from 'react';
import './Login.css';
import logo from '../images/robo.png'
import {signInWithPopup} from 'firebase/auth'
import {auth, provider, provider2} from '../firebase/firebase.init';

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
            })
            .catch(error=> {
                console.error('error', error);
            })
        }
    return (
    <div>
        <div className='container logo-form ' id='logo'>
            <img className='logo' src={logo} alt="" />
        </div> 

        <div className='container'>
            <div className='login-form'>
                <div className='form-row px-2'>
                    <input type="text" placeholder='email' className='form-control mt-2' id='email' />
                </div>
            
                <div className='form-row px-2'>
                    <input type="password" placeholder='Password' className='form-control mt-2 required' id='password' />    
                </div>

            
                <div className='d-flex justify-content-center' id='login'>
                    <button className='btn btn-primary mt-4'>Login</button>
                    
                </div>
            </div>
        </div>

        <div className='btn-class'>

        <button className='btn btn-secondary mx-2' onClick={handlesignIn}>
        <span> <i class="fa-brands fa-google"></i> </span>Google
      </button>

      <button className='btn btn-secondary mx-2' onClick={handleWithGit}>
        <span> <i class="fa-brands fa-facebook"></i> </span> Facebook
      </button>

      <button className='btn btn-secondary mx-2' onClick={handleWithGit}>
        <span> <i class="fa-brands fa-github"></i> </span> Github
      </button>

        </div>
        
    </div>
    );
};

export default Login;