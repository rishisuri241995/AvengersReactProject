import React, { Component } from 'react'
import './UserDashBoard.css'
import NavigationBar from './NavigationBar/NavigationBar'
import { Container } from 'react-bootstrap'
// import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import Profile from './Profile/Profile'
import NGOs from './NGOs/NGOs'
import Footer from './Footer/Footer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './Login/Login'
import DonationForm from './DonationForm/DonationForm'
import NgoProfile from './NgoProfiles/NgoProfile'

export default class UserDashBoard extends Component {
    render() {
        return (
            <div className="main-con">
                {/* <Login/> */}
                <NavigationBar />
                <Container>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/ngos" component={NGOs} />
                            <Route exact path="/ngos/:id" component={NgoProfile} />
                            <Route exact path="/donation" component={DonationForm} />
                            {/* <Route exact path="/listofdonation" component={ListOfDonation} /> */}
                            {/* <Route exact path="/thankyou" component={ThankYou} /> */}
                        </Switch>
                    </BrowserRouter>

                </Container>
                <Footer />
            </div>
        )
    }
}
