const BASE_URL = '/api/v1/channels';
export const API_WS_ROOT = 'ws://localhost:3000/cable';
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url, { credentials: "same-origin" }).then(r => r.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise // Will be resolved by redux-promise
  };
}

export function createMessage(channel, author, content) {
  const url = `${BASE_URL}/${channel}/messages`;
  const body = { author, content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken
    },
    credentials: "same-origin",
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: MESSAGE_POSTED,
    payload: promise // Will be resolved by re,dux-promise
  };
}

export function messageReceived(response) {
  return  {
    type: MESSAGE_RECEIVED,
    payload: response
  }
}
