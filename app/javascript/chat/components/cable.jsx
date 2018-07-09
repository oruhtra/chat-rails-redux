import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ channelName, handleReceivedMessage }) => {
  return (
    <Fragment>
      <ActionCable
        channel={{ channel: 'MessagesChannel', channel: channelName }}
        onReceived={handleReceivedMessage}
      />
    </Fragment>
  );
};

export default Cable;
