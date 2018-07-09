import { FETCH_MESSAGES, MESSAGE_RECEIVED, CHANNEL_SELECTED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES: {
      return action.payload;
    }
    case CHANNEL_SELECTED: {
      return []; // Channel has changed. Clearing view.
    }
    case MESSAGE_RECEIVED: {
      const copiedState = state.slice(0);
      copiedState.push(action.payload)
      return copiedState;
    }
    default:
      return state;
  }
}
