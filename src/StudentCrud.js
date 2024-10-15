import { Component } from "react";
import React from "react";

class StudentCrud extends Component{
    id = React.createRef();
    sname = React.createRef();
    per = React.createRef();
    result = React.createRef();

    constructor(){
        super();
        this.state={
            msg:'',
            students:[
                {"id":1001, "sname": "Anil", "percentage":90, "result": "pass"},
                {"id":1002, "sname": "Seeta", "percentage":80, "result": "pass"},
                {"id":1003, "sname": "Raju", "percentage":12, "result": "fail"},
                {"id":1004, "sname": "Geeta", "percentage":95, "result": "pass"},
            ],
            s:{"id":0, "sname":"", "percentage":0, "result":""}
        }
    }
    componentDidMount(){
        this.setState({msg:`Count of Student: ${this.state.students.length}`})
    }
    getById(id){
        var st = this.state.students.find(x=>x.id==id);
        this.setState({s:st})
    }
    create(id,name,per,res){
        var data = {"id":id, "sname":name, "percentage":per, "result":res};
        this.state.students.push(data);
        this.setState(this.state.students);
    }

    update(id,name,per,res){
        var idx = this.state.students.findIndex(x=>x.id==id);
        var data = {"id":id, "sname":name, "percentage":per, "result":res};
        this.state.students[idx]=data;
        this.setState(this.state.students);
    }
    delete(id){
        if(id>0){
            if(window.confirm("Are you sure?")){
                var idx = this.state.students.findIndex(x=>x.id==id);
                this.state.students.splice(idx,1);
                this.setState(this.state.students);
            }
        }
    }
    render(){
        return <div>
            <h2>List of Students</h2>
            <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name of Employee</th>
                    <th>Job</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {this.state.students.map(stud=>
                    <tr>
                        <td>{stud.id}</td>
                        <td>{stud.sname}</td>
                        <td>{stud.percentage}</td>
                        <td>{stud.result}</td>
                    </tr>
                )}
            </tbody>
        </table>
        <hr/>
                {this.state.msg}
        <hr/>
        ID: <input type="number" ref={this.id}></input> <br/>
        Name: <input type="text" ref={this.sname}></input> <br/>
        Percentage: <input type="number" ref={this.per}></input> <br/>
        Result: <input type="text" ref={this.result}></input> <br/> <br/>

        <button onClick={()=>this.create(this.id.current.value, this.sname.current.value, this.per.current.value, this.result.current.value)}>Create</button> <span></span>
        <button onClick={()=>this.getById(this.id.current.value)}>Find</button> <span></span>
        <button onClick={()=>this.update(this.id.current.value, this.sname.current.value, this.per.current.value, this.result.current.value)}>Update</button> <span></span>
        <button onClick={()=>this.delete(this.id.current.value)}>Delete</button> <span></span>

            <br/>

        ID: {this.state.s.id} <br/>
        Name: {this.state.s.sname} <br/>
        Percentage: {this.state.s.percentage} <br/>
        Result: {this.state.s.result} <br/>

        </div>
    }
}

export default StudentCrud;