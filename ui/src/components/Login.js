import React, { Component } from 'react'
import auth from '../auth'

let email, password

export default function Login ({
  login
}) {
  return (
    <div
      style = {{
        height: `calc(100% - 5rem)`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`
      }}
    >
      <div
        style = {{
          display: `flex`,
          flexDirection: `column`
        }}
      >
        <input
          ref = { node => email = node }
          placeholder = "Email.."
          type = "text"
        />
        <input
          ref = { node => password = node }
          placeholder = "Password.."
          type = "password"
        />
        <button
          onClick = { () => login(`login`, { email: email.value, password: password.value }) }
        >
          Log In
        </button>
        <button
          onClick = { () => login(`signup`, { email: email.value, password: password.value }) }
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}
