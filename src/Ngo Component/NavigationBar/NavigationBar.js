import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import './NavigationBar.css'

export default class NavigationBar extends Component {
  state = {
    name: "YMP"
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="#home"><img className="navbar-logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmdindiaonline.com%2Fsail%2FImages%2Fhelping_hand.png&f=1&nofb=1" alt="logo"/></Navbar.Brand>
          <Navbar.Brand href="#home">Let's Help</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#link"><img className="sociallogo" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fplacedesaulniers.com%2Fimages%2Flogofacebook.png&f=1&nofb=1" alt="facebook"/></Nav.Link>
            <Nav.Link href="#link"><img className="sociallogo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Ftwitter-512.png&f=1&nofb=1" alt="twitter"/></Nav.Link>
            <Nav.Link href="#link"><img className="sociallogo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanderson.stanford.edu%2Fwp-content%2Fthemes%2Fandersoncollection%2Fimg%2Fwhite-instagram-512.png&f=1&nofb=1" alt="twitter"/></Nav.Link>
              <NavDropdown drop="down" alignRight title={this.state.name} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">MyProfile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">My Donations</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
