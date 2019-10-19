import React,{Component} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import LoginComponent from './LoginComponent';
import WelcomeComponent from './WelocmeComponent';
import ErrorComponent from './ErrorComponent';
import TodoComponent from './TodoComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
export default class TodoApp extends Component{
    render(){
        return(
            <div>
                <Router>
                    <>
                    <HeaderComponent></HeaderComponent>
                    <Switch>
                    <Route path="/" exact component={LoginComponent}></Route>
                    <Route path="/login" component={LoginComponent}></Route>
                    <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                    <AuthenticatedRoute path="/todo" component={TodoComponent}></AuthenticatedRoute>
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
                    <Route  component={ErrorComponent}></Route>
                    </Switch>
                    <FooterComponent></FooterComponent>
                    </>
                </Router>
            </div>
        )
    }
}