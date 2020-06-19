import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'

function Message(props) {
    console.log(props.data)
    const [username, setUsername] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/api/users/'+props.data.user)
        .then(res => {
            console.log(res.data)
            setUsername(res.data.name)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <Row className="m-2" style={{backgroundColor:"#EEEEEE"}}>
            <Col>
                <Row className="ml-2 py-2">
                    <h6 className="col-auto p-0" style={{fontWeight:"bolder"}}>{username}</h6>
                    <small className="col-auto p-0 ml-2">{props.data.createdAt}</small>
                    
                </Row>
                <Row className="ml-2">
                    <p>{props.data.content}</p>
                </Row>
            </Col>
        </Row>
    )
}

export default Message