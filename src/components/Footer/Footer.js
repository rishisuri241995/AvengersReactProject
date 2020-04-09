import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" sticky="bottom">
    <Nav.Link>© YMP Co. Op. </Nav.Link>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
            </div>
        )
    }
}
