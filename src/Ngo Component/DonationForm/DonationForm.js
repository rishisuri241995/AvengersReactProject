import React, { Component } from 'react'
import './DonationForm.css';
import { Container, Row, Col } from 'react-bootstrap';
export default class DonationForm extends Component {
    render() {
        return (
            <div>
                <Container className="donation-container">
                <Row className="d-flex donation-heading">
                        <Col md={5}>
                            <h1>Donation Form</h1>
                        </Col>
                    </Row>
                    <form>
                    <Row className="d-flex justify-content-center">
                        <Col md={5}>
                            <label>Product Name: </label>
                            <input type="text" className="form-control" name="productName" placeholder="Enter Product name"/>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col md={5}>
                            <label>Product Details: </label>
                            <textarea name="details" className="form-control donation-details" rows="10" >
                                Please Enter Your Details
                            </textarea>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col md={5}>
                            <label>Category: </label>
                            <select name="Ngos" className="form-control">
                                <option>--Please Select Category--</option>
                                <option>Clothes</option>
                                <option>Food</option>
                                <option>Winter Stuff</option>
                                <option>Shoes</option>
                                <option>Other</option>
                            </select>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col md={5}>
                            <label>Ngo: </label>
                            <input type="text" disabled className="form-control" name="productName" value="Ymp's NGO"/>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col md={5}>
                            <label>Date of Donation: </label>
                            <input type="date" className="form-control" name="productName" value="Ymp's NGO"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <input type="submit" className="btn btn-primary btn-donate" value="Donate"/>
                        </Col>
                    </Row>
                    </form>
                </Container>
            </div>
        )
    }
}
