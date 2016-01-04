import React, { Component, Children, cloneElement } from 'react'
import { Link } from 'react-router'
import auth from '../auth'
import { domain } from 'config'

export default class App extends Component {
  static contextTypes = {
    history: React.PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {
      loggedIn: auth.loggedIn(),
      user: {
        email: localStorage.userEmail
      },
    }
  }

  login = (type, { email, password }) => {
    auth[type]({ email, password }, response => {
      if (response.success) {
        this.setState({
          loggedIn: response.success,
          user: response.user
        })

        let nextPathname = this.props.location.state
          ? this.props.location.state.nextPathname
          : `/`

        this.context.history.pushState(null, nextPathname)
      } else {
        this.setState({
          message: response.message
        })
      }
    })
  }

  logout = () => {
    localStorage.clear()
    this.context.history.pushState(null, `/login`)
    this.setState({ loggedIn: false })
  }

  createGallery = async ({ name, password, submitDeadline }) => {
    event.preventDefault()

    let body = {
      name,
      password,
      submitDeadline,
      owner: this.state.user.email,
      token: localStorage.token
    }

    let response = await fetch(`${domain}:8080/api/newgallery`, {
      method: `POST`,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    let { success, galleryId } = await response.json()

    if (success) {
      this.context.history.pushState(null, `/gallery/${galleryId}`)
    }
  }

  render() {
    let children = Children.map(this.props.children, child => {
      return cloneElement(child, {
        ...child.props,
        ...this.props,
        ...this.state,
        setAuth: this.setAuth,
        createGallery: this.createGallery,
        login: this.login
      })
    })

    return (
      <div
        style = {{
          height: `100%`,
        }}
      >
        <div
          className = "z-depth-2"
          style = {{
            backgroundColor: `rgb(27, 173, 112)`,
            height: `5rem`,
            width: `100%`,
            padding: `0 3rem`,
            display: `flex`,
            alignItems: `center`,
            color: `white`
          }}
        >
          <Link
            to = "/"
          >
            <span
              style = {{
                color: `white`,
                fontSize: `1.4em`
              }}
            >
              Rater
            </span>
          </Link>

          { this.state.loggedIn &&
          <div
            style = {{
              marginLeft: `auto`
            }}
          >
            <span>Welcome, { this.state.user.email }</span>
            <a
              onClick = { this.logout }
              style = {{
                marginLeft: `1rem`,
                color: `white`
              }}
            >
              Log out
            </a>
          </div>
          }
        </div>
       { children }
      </div>
    )
  }
}
