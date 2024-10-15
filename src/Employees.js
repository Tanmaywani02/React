var employees = [
    {"id":1001, "ename": "Anil", "job":"Trainer", "salary": 70000},
    {"id":1002, "ename": "Seeta", "job":"AA", "salary": 24000},
    {"id":1003, "ename": "Raju", "job":"AT", "salary": 21000},
    {"id":1004, "ename": "Geeta", "job":"A", "salary": 30000},

]

function EmployeeComponent(){
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
                {employees.map(e=>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.ename}</td>
                        <td>{e.job}</td>
                        <td>{e.salary}</td>
                    </tr>
                )}
            </tbody>

        </table>
        {/* {employees.map(e=> <EmployeeDetails e={e}/>)} */}
    </div>
}

function EmployeeDetails(props){
    return <div>
        <h2>Details for {props.e.id}</h2>
        Name: {props.e.ename} <br/>
        Job: {props.e.job} <br/>
        Salary: {props.e.salary} <br/>
    </div>
}

export default EmployeeComponent;