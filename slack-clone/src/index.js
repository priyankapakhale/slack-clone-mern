import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ChannelContextProvider} from './components/channelContext'

ReactDOM.render(
  <ChannelContextProvider>
    <App />
  </ChannelContextProvider>
,
  document.getElementById('root')
);

