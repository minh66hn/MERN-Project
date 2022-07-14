import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
const LoginForm = ({ authRoute }) => {

  /

  const loginUser = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = loginForm;
  const onChangeLoginForm = (event) => {
    return setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });
  };

  const login = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            value={username}
            onChange={onChangeLoginForm}
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
            value={password}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Button
          variant="success"
          type="submit"
          className="button-1"
          onClick={login}
        >
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

export default LoginForm;
