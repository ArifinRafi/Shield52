import React from 'react';
import './WorkersFrom.css'
import { Nav, Form, Button } from 'react-bootstrap';

const WorkersForm = () => {
  return (
    
    <div>
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
                id='worker-name'
              />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Age"
                autoFocus
                id='worker-name'
              />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="NID/Passport Number"
                autoFocus
                id='worker-name'
              />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                autoFocus
                id='worker-name'
              />
        </Form.Group>
       

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          
        <Form.Label>Upload your photo</Form.Label>
        <Form.Control
                type="file"
                placeholder="Upload"
                autoFocus
                id='worker-name'
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
          
          <Button variant="primary mb-5 submit-btn">Submit</Button>{' '} 
          
        </div>
         
        

        

       </div>
     </div>
   </div>
    </div>
  );
};

export default WorkersForm;