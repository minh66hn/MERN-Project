import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const loginForm = () => {
  return (
    <div className="form-group">
      <Form className="my-4">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username is here"
            name="username"
            required
            className="col-xs-3"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password is here"
            name="password"
            required
            className="col-xs-3"
          />
        </Form.Group>
        <Button variant="success" type="submit" className="button-1">
          Submit
        </Button>
      </Form>
      <p>
        Don't have an account?
        <Link to="/register">
          <Button variant="info" size="sm" className="ml-2">
            Register
          </Button>
        </Link>
      </p>
    </div>
  );
};

export default loginForm;
