import React, {useState} from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'

function Register() {
    const [registerData, setRegisterData] = useState({name:'', email:'', password:'', password2:''})

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/users/register',registerData)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.response.data)
        })
    }

    const onChange = e => {
        const {name, value} = e.target
        setRegisterData({
            ...registerData,
            [name]: value
        })
    }

    return (
        <Container className="h-100">
            <Row className="h-100 justify-content-center align-items-center">
                <Col lg={4} md={6} xs={8}>
                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>Full name</Form.Label>
                            <Form.Control 
                                type="text" 
                                onChange={onChange} 
                                name="name" 
                                value={registerData.name} 
                                placeholder="Enter full name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email" 
                                value={registerData.email} 
                                onChange={onChange}
                                placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name="password" 
                                value={registerData.password} 
                                onChange={onChange}
                                placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                name="password2" 
                                value={registerData.password2} 
                                onChange={onChange}
                                placeholder="Password" />
                        </Form.Group>
                    
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register
