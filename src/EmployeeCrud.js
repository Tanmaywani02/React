import React, { Component } from "react";

class EmployeeCrud extends Component{
    constructor(){
        super();
        

        this.state={
            msg:'',
            employees:[
                {"id":1001, "ename": "Anil", "job":"Trainer", "salary": 70000},
                {"id":1002, "ename": "Seeta", "job":"AA", "salary": 24000},
                {"id":1003, "ename": "Raju", "job":"AT", "salary": 21000},
                {"id":1004, "ename": "Geeta", "job":"A", "salary": 30000},
            ],
            e:{"id":0,"ename":'', "job":"","salary":0},
           
        };
    }
    eid=React.createRef();
    ename=React.createRef();
    job=React.createRef();
    salary=React.createRef();
    componentDidMount(){
        this.setState({msg:`Count of employees: ${this.state.employees.length}`})

    }
    getEmpById(eid){
        var emp = this.state.employees.find(x=>x.id==eid);
        this.setState({e:emp});
        this.eid.current.value=null;
        this.ename.current.value=null;
        this.job.current.value=null;
        this.salary.current.value=null;
    }
    create(eid, name, job, salary){
        var newEmp = {"id":eid, "ename":name, "job":job, "salary":salary};
        this.state.employees.push(newEmp);
        this.setState(this.state.employees);
        this.eid.current.value=null;
        this.ename.current.value=null;
        this.job.current.value=null;
        this.salary.current.value=null;

    }
    update(eid, name, job, salary){
        var emp = this.state.employees.findIndex(x=>x.id==eid);
        var data = {"id":eid, "ename":name, "job":job, "salary":salary}
        this.state.employees[emp]=data;
        // this.state.employees[emp].job=job;
        // this.state.employees[emp].salary=salary;
        this.setState(this.state.employees);
        this.eid.current.value=null;
        this.ename.current.value=null;
        this.job.current.value=null;
        this.salary.current.value=null;
    }
    delete(id){
        if(id>0){
            if(window.confirm("Are you sure?")){
                var emp = this.state.employees.findIndex(x=>x.id==id);
                this.state.employees.splice(emp, 1);
                this.setState(this.state.employees);
                this.eid.current.value=null;
                this.ename.current.value=null;
                this.job.current.value=null;
                this.salary.current.value=null;
            }
        }
        else{
            window.alert("enter id ")
        }
        

    }
    render(){
        return <div>
            
        <h2>List of Employee</h2>
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
                {this.state.employees.map(e=>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.ename}</td>
                        <td>{e.job}</td>
                        <td>{e.salary}</td>
                    </tr>
                )}
            </tbody>

        </table>
        Enter <br/>
        ID: <input type="number" ref={this.eid}></input> <br/>
        Name: <input type="text" ref={this.ename}></input> <br/>
        Job: <input  type="text" ref={this.job}></input> <br/>
        Salary: <input  type="number" ref={this.salary}></input> <br/> <br/>
        <button onClick={()=>this.create(this.eid.current.value, this.ename.current.value, this.job.current.value, this.salary.current.value)}>Create</button> <span></span>
        <button onClick={()=>this.update(this.eid.current.value, this.ename.current.value, this.job.current.value, this.salary.current.value)}>Update</button> <span></span>
        <button onClick={()=>this.getEmpById(this.eid.current.value)}>Find</button> <span></span>
        <button onClick={()=>this.delete(this.eid.current.value)}>Delete</button> <span></span>

        <hr/>
            
        {this.state.msg}
        <hr/>

       

            ID: {this.state.e.id} <br/>
            Name: {this.state.e.ename} <br/>
            Job: {this.state.e.job} <br/>
            Salary: {this.state.e.salary} <br/>
            
        </div>
     
    }

}
    


export default EmployeeCrud;