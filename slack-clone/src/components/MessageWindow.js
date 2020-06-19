import React, {useState, useEffect} from 'react'
import {Row} from 'react-bootstrap'
import MessageWindowHeader from './MessageWindowHeader'
import Messages from './Messages'
import NewMessage from './NewMessage'

function MessageWindow(props) {
    const [changed, setChanged] = useState(0)

    function rerenderParentCallback() {
        setChanged(changed+1)
    }

    return (
        <Row className="h-100">
            <MessageWindowHeader data={props.data}/>
            <Messages />
            <NewMessage data={props.data} rerender={rerenderParentCallback}/>
        </Row>
    )
}

export default MessageWindow