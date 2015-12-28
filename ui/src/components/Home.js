import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Home extends Component {
  constructor (props) {
    super(props)

    this.state = { galleries: [] }
    this.getGalleries()
  }

  getGalleries = async () => {
    let response = await fetch(`http://localhost:8080/api/galleries`, {
      method: `POST`,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: localStorage.token })
    })

    let json = await response.json()

    this.setState({
      galleries: json
    })
  }

  render () {
    return (
      <div>
        <Link
          to="/new-gallery"
        >
          New Gallery
        </Link>

        <div
          style = {{
            display: `flex`,
            flexWrap: `wrap`,
          }}
        >
          { this.state.galleries.map(g =>
          <Link
            to={ `/gallery/${g._id}` }
            key = { g._id }
          >
            <div
              style = {{
                width: `10rem`,
                height: `5rem`,
                border: `2px solid rgb(59, 150, 80)`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                margin: `1rem`
              }}
            >
              { g.name }
            </div>
          </Link>
          )}
        </div>
      </div>
    )
  }
}
