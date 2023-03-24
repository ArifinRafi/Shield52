import React from 'react';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <div className='header-background'>
                <div className='header-second'> 
                    <h2>Worker Records</h2> 
                    <div className='workers-card'>
                        <div className="card"><p>Worker 1</p></div>
                        <div className="card"><p>Worker 2</p></div>
                        <div className="card"><p>Worker 3</p></div>
                    </div>
                    
                </div>
                <div className="third-row-inside">
                    <h2>Important Notifications</h2>
                    <div className='workers-card'>
                        <div className="notification-card"><p>Worker 1</p></div>
                        <div className="notification-card"><p>Worker 2</p></div>
                        <div className="notification-card"><p>Worker 3</p></div>
                        <div className="notification-card"><p>Worker 4 </p></div>
                    </div></div>  
                <div className="last-row-inside">
                    <h2>Device Configurations</h2></div> 
                </div>

               

                
        </div>
    );
};

export default Dashboard;