import React,{Component}  from 'react';
import {Link} from 'react-router-dom';

export default class WelcomeComponent extends Component{
    render(){
        return(
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.
                    You can manage your todos <Link to="/todo">here</Link>.
                </div>
                <div className="container">
                    Click here to get a customized welcome message.
                    <button 
                        className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {/* {this.state.welcomeMessage} */}
                </div>
            </>
        )
    }
}