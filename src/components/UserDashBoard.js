import React, { Component } from 'react'
import './UserDashBoard.css'
import NavigationBar from './NavigationBar/NavigationBar'
import { Container } from 'react-bootstrap'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Profile from './Profile/Profile'
// import NGOs from './NGOs/NGOs'
import Footer from './Footer/Footer'
// import Login from './Login/Login'
import DonationForm from './DonationForm/DonationForm'

export default class UserDashBoard extends Component {
    render() {
        return (
            <div className="main-con">
                {/* <Login/> */}
                <NavigationBar/>
                    <Container>
                        <DonationForm/>
                        {/* <NGOs/> */}

                    </Container>
                <Footer/>
            </div>
        )
    }
}
