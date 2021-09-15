import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Reports from '../Pages/Reports';
import Products from '../Pages/Products';
import Team from '../Pages/Team';
import Messages from '../Pages/Messages';
import Support from '../Pages/Support';
import NotFound from '../Pages/NotFound';
import User from '../Components/User';

function AppRouter() {
    return (
        <Fragment>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/reports" component={Reports}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/team" component={Team}/>
            <Route exact path="/messages" component={Messages}/>
            <Route exact path="/support" component={Support}/>
            <Route exact path="/user/:id" component={User}/>
            <Route exact component={NotFound}/>
        </Switch>
        </Fragment>
    )
}

export default AppRouter