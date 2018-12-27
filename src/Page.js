import React from 'react';
import {HashRouter as Router,Router ,Switch, Redirect, Route } from 'react-router-dom';
import NotFound from './componetn/pages/NotFound'

export default () =>{
    <Router>
        <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />        
            <Route path="/app" component={App} />
            <Route path="/404" component={NotFound} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    </Router>
}