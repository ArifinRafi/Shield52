import React, { useState, useEffect } from 'react';
import './WorkersFrom.css'
import { Nav, Form, Button } from 'react-bootstrap';
import Navbar from './Navbar';
import  Axios from 'axios';
import { Modal } from 'react-bootstrap';



const WorkersForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const submitForm = () => {
    const worker_name = document.getElementById('worker_name').value;
    const worker_address = document.getElementById('address').value;
    const worker_id = document.getElementById('nid_no').value;
  }

  const [WorkersName, setname] = useState("");
  const [address, setaddress] = useState("");
  const [nidNumber, setnidNumber] = useState("");
  const [Age, setage] = useState("");


const submit_btn = () => {
  Axios.post("http://localhost:5001/create", {WorkersName:WorkersName, Age:Age, address:address, nidNumber:nidNumber}).then(() => {

  });
};

const newSubmit = () => {
  handleShow();
  submit_btn();
}

  

  
  return (
    
    <div className='page-body'>
      <Navbar></Navbar>
      <div className='container' >
        
     
     <div className='form-container justify-content-center mt-5'>
       <div className='mx-3 form-content'>
        <h2 className='px-5 mx-5 mt-4'>Worker Registration From </h2>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Full Name"
                autoFocus
                id='worker_name'
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Age"
                autoFocus
                id='worker_age'
                onChange={(e) => {
                  setage(e.target.value);
                }}
              />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="NID/Passport Number"
                autoFocus
                id='nid_no'
                onChange={(e) => {
                  setnidNumber(e.target.value);
                }}
              />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                autoFocus
                id='address'
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              />
        </Form.Group>
       

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
        <Form.Label>Upload your photo</Form.Label>
        <Form.Control
                type="file"
                placeholder="Upload"
                autoFocus
                id='worker_photo'
              />
              
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
        <Form.Label>Marrital Status</Form.Label>
        <Form>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Married"
            name="Married"
            type={type}
            id={`inline-${type}-1`}
          />

        <Form.Check
            inline
            label="Unmarried"
            name="Married"
            type={type}
            id={`inline-${type}-1`}
          />

        <Form.Check
            inline
            label="Divorced"
            name="Married"
            type={type}
            id={`inline-${type}-1`}
          />
          
      
        </div>
      ))}
    </Form>

    
    
        </Form.Group>
        <div className="container ">
          
          <Button onClick={newSubmit} variant="primary mb-5 submit-btn">Submit</Button>{' '}     
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Workers Form Submission</Modal.Title>
          </Modal.Header>
          <Modal.Body>New Worker Succesfully Registered</Modal.Body>
         <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Okay
          </Button>
          </Modal.Footer>
          </Modal>
          
        </div>
         
       </div>
     </div>
   </div>

   
    </div>
  );
};

export default WorkersForm;