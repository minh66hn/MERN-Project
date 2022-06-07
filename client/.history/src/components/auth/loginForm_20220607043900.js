import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const loginForm = () => {
  return (
    // <div>
    //   <Form>
    //     <Form.Group>
    //       <Form.Label>Username</Form.Label>
    //       <Form.Control
    //         type="text"
    //         placeholder="Username"
    //         name="username"
    //         required
    //       />
    //     </Form.Group>

    //     <Form.Group>
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         placeholder="Password"
    //         name="password"
    //         required
    //       />
    //     </Form.Group>
    //     <Button variant="success" type="submit">
    //       Submit
    //     </Button>
    //   </Form>
    //   <p>
    //     Don't have an account?
    //     <Link to="/register">
    //       <Button variant="info" size="sm" className="ml-2">
    //         Register
    //       </Button>
    //     </Link>
    //   </p>

    // </div>
    <>
      <Form className="my-4" onSubmit={login}>
        <AlertMessage info={alert} />

        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Login
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
    </>
  );
};

export default loginForm;
