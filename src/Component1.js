import {Component} from 'react';
import Employees from './Employees';
import PeopleComponent from './People';

class Component1 extends Component{
  // constructor(props){
  //   super(props);

  // }
  state = {msg:' ', comp:''}
  sayHello(p){
    if(p==='hello')
      this.setState({msg:'Hello'})
    else if(p==='date')
        this.setState({msg:new Date().toLocaleDateString()})
    if(p==='time')
        this.setState({msg:new Date().toLocaleTimeString()})
  }
  showDetails(c){
    if(c==='emp'){
      this.setState({comp:<Employees/>})
      
      // <EmployeeComponent/>
    }
    else if(c==='pep')
        this.setState({comp:<PeopleComponent/>})
  }
  render() {
    return (
      <div>
        <h1>Class Component, Ex-01</h1>
        {/* Message: {this.props.msg} */}
        {/* <button onClick={()=>this.sayHello('hello')}>Say Hello</button>
        <button onClick={()=>this.sayHello('date')}>Get Date</button>
        <button onClick={()=>this.sayHello('time')}>Get Time</button> <hr/> */}
        <button onClick={()=>this.showDetails('emp')}>Show Employees</button> <br/>
        <button onClick={()=>this.showDetails('pep')}>Show People</button> <br/>
        {this.state.comp}
      </div>
    )
  }  
}

export default Component1;