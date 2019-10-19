import React, {Component} from 'react';
import TodoApp from './components/todo-app/TodoApp';
import FirstComponent, {SecondComponent} from './components/learning-examples/FirstComponent';
import Counter from './components/counter-application/counter/counter';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

function App() {
  return (
    <div className="App">
     {/* <header className="App-header">
      <Counter></Counter>
  </header>*/}
    <TodoApp></TodoApp>
    
    </div>
  );
}

// class LearningComponets extends Component {
//   render(){
//     return (
//       <p>LearningComponents</p>

//     );
//   }
// }


export default App;
