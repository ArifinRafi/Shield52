import React from 'react';
import './Dashboard.css'
import logo2 from '../images/logo2.png'

const Dashboard = () => {
    return (
        <div>
            <div className='header-background'>
                <img className='logo' src={logo2} alt="" />
                <div className='header-second'> 
                    <h2>Worker Records</h2> 
                    <div className='workers-card'>
                        <div className="card"><p>Worker 1</p>
                        <p><i className="fa-regular fa-user  fa-2x"></i></p></div>
                        <div className="card"><p>Worker 2</p>
                        <p><i className="fa-regular fa-user  fa-2x"></i></p></div>
                        <div className="card"><p>Worker 3</p><p>
                        <i className="fa-regular fa-user  fa-2x"></i></p></div>
                    </div>
                    
                </div>
                <div className="third-row-inside">
                    <h2>Important Notifications</h2>
                    <div className='workers-card'>
                        <div className="notification-card"><p><i class="fa-regular fa-user"></i> Worker 1</p>
                        <span>Device: OFF </span> <br />
                        <span>Oxygen: -- </span> <br />
                        <span>Floor: --</span>                        
                        </div>
                        <div className="notification-card"><p><i class="fa-regular fa-user"></i> Worker 2</p>
                        <span>Device: OFF </span> <br />
                        <span>Oxygen: -- </span> <br />
                        <span>Floor: --</span>
                        </div>
                        <div className="notification-card"><p><i class="fa-regular fa-user"></i> Worker 3</p>
                        <span>Device: OFF </span> <br />
                        <span>Oxygen: -- </span> <br />
                        <span>Floor: --</span>
                        </div>
                        <div className="notification-card"><p> <i class="fa-regular fa-user"></i> Worker 4</p>
                        <span>Device: OFF </span> <br />
                        <span>Oxygen: -- </span> <br />
                        <span>Floor: --</span>
                        </div>
                    </div></div>  
                <div className="last-row-inside">
                    <div className='user-button'>
                    <button type="button" class="btn btn-secondary">Secondary</button>
                    <button type="button" class="btn btn-secondary">Secondary</button>
                    <button type="button" class="btn btn-secondary">Secondary</button> 
                    <h2>Device Configurations</h2> 
                    </div>
                    
                    </div> 
                </div>

               

                
        </div>
    );
};

export default Dashboard;