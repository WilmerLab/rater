export let API =
  localStorage.REACT_APP_API ||
  process.env.REACT_APP_API ||
  'http://localhost:8080'

export let ROUTER =
  localStorage.REACT_APP_ROUTER || process.env.REACT_APP_ROUTER || 'hash'
