import React, { useState } from 'react'

const {Provider, Consumer} = React.createContext()

function ChannelContextProvider(props) {
    const [channelName, setChannelName] = useState('')

    const changeChannelName = (name) => {
        setChannelName(name)
    }

    return(
        <Provider value={{channelName, changeChannelName}}>
            {props.children}
        </Provider>
    )
}

export {ChannelContextProvider, Consumer as ChannelContextConsumer}