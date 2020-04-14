import React, { Component } from 'react'
import { Row, Col} from 'react-bootstrap'
import './Login.css'
export default class NGoLogin extends Component {
    render() {
        return (
            <div fluid="xl" className="login-out-container">
                <div className="container login-container">
                <Row noGutters={true} className='d-flex justify-content-center'>
                        <Col md={5}>
                            <img className="login-logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmdindiaonline.com%2Fsail%2FImages%2Fhelping_hand.png&f=1&nofb=1" alt="logo"/>
                        </Col>
                    </Row>
                    <Row noGutters={true} className='d-flex login-heading justify-content-center'>
                        <Col md={4}>
                            <h1>NGO Login</h1>
                        </Col>
                    </Row>
                    <form>
                        <Row noGutters={true} className='d-flex justify-content-center'>
                            <Col md={4} className="text-left">
                        <label>Email:</label>  
                        <input type="email" name="email" className="form-control" placeholder="Enter Your email here"/>
                        </Col>
                        </Row>
                        <Row noGutters={true} className='d-flex justify-content-center'>
                            <Col md={4} className="text-left">
                        <label>Password:</label>  
                        <input type="password" name="pass" className="form-control" placeholder="Enter Your Password here"/>
                        </Col>
                        </Row>
                        <Row noGutters={true} className='d-flex justify-content-center'>
                            <Col md={4} className="text-left">
                        <input type="submit" value="Login" className="btn btn-success btn-login"/>
                        </Col>
                        </Row>
                    </form>
                    <Row noGutters={true} className='d-flex justify-content-center register-link'>
                            <Col md={4} className="text-left">
                        <label>Don't have Account yet?</label>  
                        <a href="register">Join us</a>
                        </Col>
                        </Row>
                </div>
            </div>
        )
    }
}
