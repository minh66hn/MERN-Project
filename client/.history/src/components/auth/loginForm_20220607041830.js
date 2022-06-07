import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const loginForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Username"
          name="username"
          required
        />
    </Form.Group>
      </Form.Control>
      </Form
  );
};

export default loginForm;
