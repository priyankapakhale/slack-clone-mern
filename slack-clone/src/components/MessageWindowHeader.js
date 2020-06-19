import React from 'react'
import {ChannelContextConsumer} from './channelContext'
import {Row, Col} from 'react-bootstrap'

function MessageWindowHeader(props) {
    return (
        <Col xs={12} style={{backgroundColor:"#353535", height: "60px"}}>
            <Row >
                <ChannelContextConsumer>
                    {({channelName}) => {
                        return (
                            <Col className="pt-1" style={{color:"white", fontSize:"18px"}}>#{channelName}</Col>
                        )}
                    }
                </ChannelContextConsumer>
            </Row>
            <Row>
                <Col style={{color:"white"}} className="pb-2">{props.data ? `${props.data.users.length} users` : ""}</Col>
            </Row>
        </Col>
    )
}

export default MessageWindowHeader