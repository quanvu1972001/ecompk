import React, {useState} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../signup/Signup.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit() {

  }
  return (
    <Container>
        <Row>
            <Col md={6} className="login__form--container">
              <Form style={{width: "100%"}} >
                <h1>Login to your account</h1>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type='mail' placeholder='Enter email' value={email} required onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type='password' placeholder='Enter password' value={password} required onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Button type="submit">Login</Button>
                </Form.Group>

                <p>Don't have an account?<Link to="/signup">Create account</Link></p>
              </Form>
            </Col>
            <Col md={6} className="login__image--container"></Col>
        </Row>
    </Container>
  )
}

export default Login