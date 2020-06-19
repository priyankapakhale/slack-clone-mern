import React, { useState, useEffect } from 'react'
import {Col} from 'react-bootstrap'
import {ChannelContextConsumer} from './channelContext'
import axios from 'axios'
import Message from './Message'

function Messages() {
    const [messages, setMessages] = useState([])
    const [channel, setChannel] = useState('General Channel')
    const [updatedMessages, setUpdatesMessages] = useState([])
    const [messageComponents, setMessageComponents] = useState([])

    function updateScroll(){
        var element = document.getElementById("messages");
        element.scrollTop = element.scrollHeight;
    }

    useEffect(() => {
        if(updatedMessages !== undefined) {
            setMessageComponents([])
            updatedMessages.map(message => (
            setMessageComponents([
                ...messageComponents, 
                <Message data={message} key={message._id} 
                />])
            ))
            updateScroll()
        }
    }, [updatedMessages])

    useEffect(() => {
        //fetch message by id and store it in updated messages
        if(messages !== undefined) {
            setUpdatesMessages([])
            messages.map(message => {
                axios.get('http://localhost:5000/api/messages/'+message)
                .then(res => {
                    setUpdatesMessages([...updatedMessages, res.data])
                })
                .catch(err => console.log(err))
            })
        }
    }, [messages])

    useEffect(() => {
        axios.get('http://localhost:5000/api/channels/'+channel)
        .then(res => {
            setMessages(res.data.messages)
        })
        .catch(err => console.log(err))

    }, [channel])

    return (
        <Col xs={12} id="messages" style={{height:"550px", overflow:"auto", scrollTop:"550px"}}>
            <ChannelContextConsumer>
                {({channelName}) => {
                    setChannel(channelName)
                }}
            </ChannelContextConsumer>
            {messageComponents}
        </Col>
    )
}

export default Messages