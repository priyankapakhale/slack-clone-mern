import React from 'react'
import {Row} from 'react-bootstrap'
import {ChannelContextConsumer} from './channelContext'

function Channel(props) {
    return (
        <ChannelContextConsumer>
            {({changeChannelName}) => (
                <Row className="pl-3" id="channel">
                    <h5 style={{color:"orange"}} onClick={() => changeChannelName(props.data.name)}>#{props.data.name}</h5>
                </Row>
            )}
        </ChannelContextConsumer>
    )
}

export default Channel