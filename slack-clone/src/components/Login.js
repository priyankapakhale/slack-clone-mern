import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'

function Login() {
    const [loginData, setLoginData] = useState({email: '' , password: ''})

    const onChange = e => {
        const {name, value} = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/users/login', loginData)
        .then(res => {
            if(res.data.success) {
                console.log('Login Successful')
            }
        })
        .catch(err => console.log(err))

    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={loginData.email} onChange={onChange} placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={loginData.password} onChange={onChange} placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}

export default Login
