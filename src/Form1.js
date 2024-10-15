import React, { Component } from "react";

class Form1 extends Component{
    state={msg:''}
    t1 = React.createRef();
    sayHello(p){
        switch(p){
            case "hello":
                var temp = `Hello ${this.t1.current.value}`;
                break;
            case "len":
                var temp = `Length of ${this.t1.current.value} is ${(this.t1.current.value).length}`;
                break;
            case "fname":
                var temp = `First Name is ${this.t1.current.value.split(' ')[0]}`;
                break;
            case "lname":
                var temp = `Last Name is ${this.t1.current.value.split(' ').pop()}`;


        }
        this.setState({msg:temp});
    }
    render(){
        return <div>
            <h1>Form Component, Ex-01</h1>
            Enter your name: 
            <input type="text" ref={this.t1}/>
            <br/> <br/> 
            <button onClick={()=>this.sayHello("hello")}>Say Hello</button> <span></span> 
            <button onClick={()=>this.sayHello("len")}>Length</button> <span></span> 
            <button onClick={()=>this.sayHello("fname")}>First Name</button> <span></span> 

            <button onClick={()=>this.sayHello("lname")}>Last Name</button> <hr/>
            {this.state.msg}
        </div>
    }
}

export default Form1;