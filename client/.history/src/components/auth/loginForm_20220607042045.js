import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const loginForm = () => {
  return (
    <Form>
    
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default loginForm;
