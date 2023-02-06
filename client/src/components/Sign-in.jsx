import { Modal, Button, Form, Alert } from "react-bootstrap";
import { React, useContext, useState, useEffect } from "react";
import { RoomsContext } from "../context/roomsContext";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { API } from "../lib/_api";

export const SignIn = (props) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(null);

  const { setModalSignIn, setUserId } = useContext(RoomsContext);
  const [formSubmit, setFormSubmit] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formSubmit;
  const handleChangeLogIn = (e) => {
    setFormSubmit({
      ...formSubmit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitLogIn = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(formSubmit);

      const responseLogIn = await API.post("/login", body, config);
      setFormSubmit({
        username: "",
        password: "",
      });
      console.log(responseLogIn.data.data);
      if (responseLogIn.data.data.token == "") {
        alert("either password or user name wrong");
      }
      if (responseLogIn.data.data.list_as_id == 1) {
        navigate("/indexOwner");
      }
      if (responseLogIn.data.data.list_as_id == 1) {
        navigate("/");
      }
      setUserId(responseLogIn.data.data.list_as_id);

      console.log(responseLogIn.data.data.list_as_id);
      setUserId(localStorage.setItem("userId", responseLogIn.data.data.list_as_id));
      localStorage.setItem("token", responseLogIn.data.data.token);
      console.log(responseLogIn.data.data);
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Either password or user name incorrect
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }

    // console.log(responseLogIn.data.data);
    // console.log(response);

    // // console.log(formSubmit);
  });

  return (
    <Modal
      show={show}
      className="d-flex justifycontent-center w-25"
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {message && message}
      <h2 className="d-flex justify-content-center my-3">Sign In</h2>

      <Modal.Body show={show}>
        <Form onSubmit={(e) => handleSubmitLogIn.mutate(e)} className="fw-bold">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={handleChangeLogIn}
              id="username"
              name="username"
              type="text"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handleChangeLogIn}
              id="password"
              name="password"
              style={{ resize: "none" }}
              type="password"
              rows={1}
            />
          </Form.Group>
          <Button
            type="submit"
            className="w-100 click"
            style={{ border: "none" }}
            onClick={() => setModalSignIn(true)}
          >
            Sign In
          </Button>
        </Form>
        <h6 className="d-flex justify-content-center text-secondary my-3">
          Don't have an account? click &nbsp;
          <a className="nav-link fw-bold" href="">
            Here
          </a>
        </h6>
      </Modal.Body>
    </Modal>
  );
};
