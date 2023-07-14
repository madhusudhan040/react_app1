import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import About from './About'
import Pagenotfound from './Pagenotfound'
import Footer from './Footer'

import RestAPI from './RestAPI'
import View from './RESTAPI/view'
import { Redirect } from 'react-router-dom'





function Routing() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/restapi" component={RestAPI} />
                <Route exact path="/restapi/:idno" component={View} />
                <Redirect to="/home" />
                <Route component={Pagenotfound} />

            </Switch>
            <Footer />
        </BrowserRouter>)
}


export default Routing