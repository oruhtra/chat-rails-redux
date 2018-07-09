import React from 'react'
import ChannelList from '../containers/channel_list'
import MessageList from '../containers/message_list'
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from '../actions'
import ErrorBoundary from './error_boundary'

const App = (props) => {
  return (
    <ErrorBoundary>
      <ActionCableProvider url={API_WS_ROOT}>
        <div className="messaging-wrapper">
          <div className="logo-container">
            <img className="messaging-logo" src="assets/images/logo.svg" alt="logo" />
          </div>
          <ChannelList selectedChannel={props.match.params.channel} />
          <MessageList selectedChannel={props.match.params.channel} />
        </div>
      </ActionCableProvider>
    </ErrorBoundary>
  )
}

export default App
