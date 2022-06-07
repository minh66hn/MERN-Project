import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const loginForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
    
  );
};

export default loginForm;
