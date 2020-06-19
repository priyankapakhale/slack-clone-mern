import React, {useState, useEffect} from 'react'
import {Col, Row, Form, Button} from 'react-bootstrap'
import {ChannelContextConsumer} from './channelContext'
import axios from 'axios'

function NewMessage(props) {
    const [message, setMessage] = useState('')
    const [updated, setUpdated] = useState(0)
    let channel_name

    const onChange = e => {
        setMessage(e.target.value)
    }

    useEffect(() => {
        console.log("refreshed")
        props.rerender()
    }, [updated])

    const onSubmit = (e) => {
        e.preventDefault()
        const msg = {user_email:"priyanka@gmail.com", channel_name: channel_name, content: message}
        axios.post('http://localhost:5000/api/messages/add', msg)
        .then(res => {
            console.log(res.data)
            setUpdated(updated+1)
        })
        .catch(err => console.log(err))
    }

    return(
        <Col xs={12} style={{position: "fixed", bottom:"0"}}>
            <ChannelContextConsumer>
                {({channelName}) => {
                    channel_name = channelName
                    return (
                        <Form className="row" onSubmit={onSubmit}>
                            <Col xs={8}>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Control 
                                        name="message" 
                                        onChange={onChange}
                                        value={message} 
                                        as="textarea" 
                                        rows="2" 
                                        placeholder={`Message #${channelName}`} />
                                </Form.Group>
                            </Col>
                            <Col xs={2}>
                                <Button variant="primary" type="submit">
                                        Send
                                </Button>
                            </Col>   
                        </Form>
                    )}
                }
            </ChannelContextConsumer>
        </Col>
    )
}

export default NewMessage