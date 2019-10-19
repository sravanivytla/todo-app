import React,{Component} from 'react';

export default class TodoComponent extends Component{


    constructor(props){
        super(props);
        this.state = {
            todos  :
            [
                {id:1, description:"create", done:false,targetDate:new Date()},               
                {id:2, description:"Learn", done:false,targetDate:new Date()},
                {id:3, description:"modify", done:false,targetDate:new Date()}
            ]
               
            
        }
    }
    render(){
        return(
            <div>
                <h1>Todo List</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                        <th>description</th>
                        <th>is Completed?</th>
                        <th>target date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                            )
                        }
                       
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}