import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './Login.css';

export default class Register extends Component {
    render() {
        return (
            <div fluid="xl" className="register-out-container">
                <div className="container register-container">
                    
                <Row noGutters={true} className=''>
                        <Col md={4}>
                            <img className="login-logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmdindiaonline.com%2Fsail%2FImages%2Fhelping_hand.png&f=1&nofb=1" alt="logo"/>
                        </Col>
                        <Col md={3}>
                            <h3>Register User</h3>
                        </Col>
                    </Row>
                    <form >
                        <Row noGutters={true} className="text-left d-flex justify-content-center">
                            <Col md={6}>
                                <label>Name</label><br/>
                                <input type="text" name="name" placeholder="Enter name here" className="form-control"/>
                            </Col>
                        </Row>

                        <Row noGutters={true} className="text-left d-flex justify-content-center">
                            <Col md={6} className="text-left">
                        <label>Email</label>  
                        <input type="email" name="email" className="form-control" placeholder="Enter Your email here"/>
                        </Col>
                        </Row>
                        <Row noGutters={true} className="text-left d-flex justify-content-center">
                            <Col md={6} className="text-left">
                        <label>Password</label>  
                        <input type="password" name="pass" className="form-control" placeholder="Enter Your Password here"/>
                        </Col>
                        </Row>
                        <Row noGutters={true} className="text-left d-flex justify-content-center">
                            <Col md={6} className="text-left">
                        <label>Phone</label>  
                        <input type="phone" name="phone" className="form-control" placeholder="Enter Your Phone here"/>
                        </Col>
                        </Row>
                        <Row noGutters={true} className="text-left d-flex justify-content-center">
                            <Col md={6} className="text-left">
                        <label>Address</label>  
                        <textarea placeholder="Enter address here" rows="5"className="form-control" style={{resize:"none"}}>
                            
                        </textarea>
                        </Col>
                        </Row>
                        <Row noGutters={true} className='d-flex justify-content-center'>
                            <Col md={4} className="text-left">
                        <input type="submit" value="Signup" className="btn btn-outline-primary btn-register"/>
                        </Col>
                        <Col md={4} className="text-left login-label">
                        <label>Already have Account? </label>  
                        <a href="/"> Login</a>
                        </Col>
                        </Row>
                    </form>
                        
                </div>
            </div>
        )
    }
}
