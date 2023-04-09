import React from 'react';
import './Dashboard.css'
import logo2 from '../images/logo2.png'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const addnew = () => {

        const card = document.createElement('div');
        const card2 = document.createElement('div');
        const worker = document.getElementById('workers-card');
        const notification_card = document.getElementById('worker-update');
        card.classList.add('card');
        card2.classList.add('notification-card');

        const name = document.getElementById('worker-name').value;
        const name2 = document.getElementById('worker-name').value;
        var new_logo = '<i className="fa-regular fa-user  fa-2x"></i>';
        const worker_name = document.createElement('p');
        const worker_name2 = document.createElement('p');
        const worker_logo = document.createElement('div');
        const device = document.createElement('span');
        const oxygen = document.createElement('span');
        const floor = document.createElement('span');
        
        
        worker_name.innerHTML=name;
        worker_name2.innerHTML=name2;
        worker_name2.appendChild(document.createElement('br'));
        worker_logo.innerHTML=new_logo;
        device.innerHTML='Device: OFF';
        device.appendChild(document.createElement('br'));
        oxygen.innerHTML='Oxygen: --';
        oxygen.appendChild(document.createElement('br'));
        floor.innerHTML='Floor: --';
        
        card2.appendChild(worker_name2);
        card2.appendChild(device);
        card2.appendChild(oxygen);
        card2.appendChild(floor);

        card.appendChild(worker_name);
        card.appendChild(worker_logo);

        
        

        worker.appendChild(card);
        notification_card.appendChild(card2);
        handleClose();

    }
    return (

        
        
        <div>
           
    
            <div className='header-background'>
            <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link  href="/home"> <p className='nav-text'> Dashboard</p></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1"> <p className='nav-text'>Workers Info</p></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2"> <p className='nav-text'>Connect</p></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="">
        <p className='nav-text'> Log Out</p>
        </Nav.Link>
      </Nav.Item>
    </Nav>
                <img className='logo2' src={logo2} alt="" />
                <div className='header-second'> 
                    <h2>Worker Records</h2> 
                    <div className='workers-card' id='workers-card'>
                        <div id='card' className="card"><p>Md. Rahim</p>
                        <p><i className="fa-regular fa-user  fa-2x"></i></p></div>
                        <div className="card"><p>Salam Sheikh</p>
                        <p><i className="fa-regular fa-user  fa-2x"></i></p></div>
                        <div className="card" id='addNew' onClick={handleShow}> <p>Add New Worker</p>
                        <p><i className="fa-regular fa-user  fa-2x"></i></p></div>
                        <Modal show={show} onHide={handleClose}>                          
                          <Modal.Header closeButton>
                            <Modal.Title>Workers Form</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                          <form>
                            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                autoFocus
                id='worker-name'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="01XXXXXXXX"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>NID Numebr</Form.Label>
              <Form.Control
                type="number"
                placeholder="XXXXXXXXXXX"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Helmet Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="XXXXXXXXXXXX"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Upload a Photo</Form.Label> <br />
              <input type="file" name="" id="" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </form>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={addnew}>
                              Add New
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        </div>

                    
                </div>
                <div className="third-row-inside">
                    <h2>Important Notifications</h2>
                    <div className='workers-card' id='worker-update'>
                        <div className="notification-card" id='notification-card' ><p><i class="fa-regular fa-user"></i> Worker 1</p>
                        <span>Device: OFF </span> <br />
                        <span>Oxygen: -- </span> <br />
                        <span>Floor: --</span>                        
                        </div>
                        <div className="notification-card" id='notification-card'><p><i class="fa-regular fa-user"></i> Worker 2</p>
                        <span>Device: OFF </span> <br />
                        <span>Oxygen: -- </span> <br />
                        <span>Floor: --</span>
                        </div>
                        <div className="notification-card" id='notification-card'><p><i class="fa-regular fa-user"></i> Worker 3</p>
                        <span>Device: OFF </span> <br />
                        <span>Oxygen: -- </span> <br />
                        <span>Floor: --</span>
                        </div>
                        <div className="notification-card" id='notification-card'><p> <i class="fa-regular fa-user"></i> Worker 4</p>
                        <span>Device: OFF </span> <br />
                        <span>Oxygen: -- </span> <br />
                        <span>Floor: --</span>
                        </div>
                    </div></div>  
                <div className="last-row-inside">
                    <div className='user-button'>
                    {/* <button type="button" class="btn btn-secondary">Secondary</button>
                    <button type="button" class="btn btn-secondary">Secondary</button>
                    <button type="button" class="btn btn-secondary">Secondary</button>  */}
                    <h2>Device Configurations</h2> 
                    </div>
                    
                    </div> 

                   
                </div>

                
                
         
                
               

                
        </div>
    );
};

export default Dashboard;