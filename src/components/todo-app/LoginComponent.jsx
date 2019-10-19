import React,{Component} from 'react';
import AuthenticationService from './auth/AuthenticationService.js';


export default class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            username:'sravani',
            password:'',
            hasLoginFailed:false,
            showSuccessMsg:false
        }
    }
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login =() =>{
        if(this.state.username === 'srav' && this.state.password ==='srav'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.username)
           this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            this.setState({
                hasLoginFailed:true,
                showSuccessMsg:false,

            })
        }
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <div className="container">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMsg && <div>Login Sucessful</div>}
                UserName:<input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button className="btn btn-success" onClick={this.login}>Login</button>

                </div>
            </div>
        )
    }

    
}

