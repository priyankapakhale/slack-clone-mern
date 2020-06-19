import React, { useState, useEffect } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import axios from 'axios'
import Channel from './Channel'
import MessageWindow from './MessageWindow'
import {ChannelContextConsumer} from './channelContext'

function Home() {
    const [channels, setChannels] = useState([])
    const [updatedChannels, setUpdatedChannels] = useState([])
    const [updateCount, setUpdateCount] = useState(0)

    //fetching all channels
    useEffect(() => {
        axios.get('http://localhost:5000/api/channels')
        .then(res => {
            setChannels(res.data)
        })
        .catch(err => console.log(err))    
    }, [updateCount])

    useEffect(() => {
        setUpdatedChannels(channels.map(channel => (
            <Channel key={channel._id} data={channel} />
        )))
    }, [channels])


    const onClick = () => {
        const name = prompt("enter channel name")
        console.log(name)
        const channel = {name, owner_email:"priyanka@gmail.com"}

        axios.post('http://localhost:5000/api/channels/add', channel)
        .then(res => {
            console.log(res.data)
            setUpdateCount(updateCount+1)
        })
        .catch(err => console.log(err))
    }
    
    return (
            <Container fluid className="h-100">
                <Row className="h-100">
                    <Col sm={3} className="pt-5 h-100" style={{backgroundColor: "#222222"}}>
                        <Row className="mb-2">
                            <Col className="p-0 ml-3">
                                <h5 style={{color:"white"}}>Channels</h5>
                            </Col>
                            <Button className="mr-3" style={{fontSize:"20px"}} onClick={onClick}>+</Button>
                        </Row>
                        {updatedChannels}
                    </Col>
                    <Col sm={9}>
                        <ChannelContextConsumer>
                            {({channelName}) => (
                                <MessageWindow data={channels.filter(channel => channel.name === channelName)[0]} />
                            )}
                        </ChannelContextConsumer>
                    </Col>
                </Row>
            </Container>
    )
}

export default Home
