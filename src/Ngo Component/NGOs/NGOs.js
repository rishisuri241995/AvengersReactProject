import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import './NGOs.css'
import { Row } from 'react-bootstrap';
// import axios from 'axios';

export default class NGOs extends Component {
    handleCardClick() {
        alert("Card Clicked");
    }
    componentDidMount() {
        // axios.get('http://localhost:5000/api/users/')
        // .then()
    }
    render() {
        return (
            <div>
                <div className="heading">
                    <h1>Ngos Work With Us</h1>
                </div>
                <Container className="main-container">
                    <Row>
                        <Card className="bg-dark ngo-card text-white" onClick={this.handleCardClick}>
                            <Card.Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fagcdn-2mrybbgckm7omi0k.netdna-ssl.com%2Fwp-content%2Fuploads%2F2017%2F06%2Falphagamma-3-reasons-why-helping-people-is-not-always-good-for-business-entrepreneurship.jpg&f=1&nofb=1" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>YMP NGO</Card.Title>
                                <Card.Text>
                                    We are happy to help everyone who is in need
                                </Card.Text>
                                <Card.Text>Toronto,Canada</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <Card className="bg-dark ngo-card text-white" onClick={this.handleCardClick}>
                            <Card.Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fagcdn-2mrybbgckm7omi0k.netdna-ssl.com%2Fwp-content%2Fuploads%2F2017%2F06%2Falphagamma-3-reasons-why-helping-people-is-not-always-good-for-business-entrepreneurship.jpg&f=1&nofb=1" alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>YMP NGO</Card.Title>
                                <Card.Text>
                                    We are happy to help everyone who is in need
                                </Card.Text>
                                <Card.Text>Toronto,Canada</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}
