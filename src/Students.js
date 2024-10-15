var student = [
    {"id":1001, "sname": "Anil", "percentage":90, "result": "pass"},
    {"id":1002, "sname": "Seeta", "percentage":80, "result": "pass"},
    {"id":1003, "sname": "Raju", "percentage":12, "result": "fail"},
    {"id":1004, "sname": "Geeta", "percentage":95, "result": "pass"},
]

function StudentComponent(props){
    return <div>
        <h2>List of {props.result} Students</h2>
        {/* <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name of Student</th>
                    <th>Percentage</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                {student.map(s=>
                    <tr>
                        <td>{s.id}</td>
                        <td>{s.sname}</td>
                        <td>{s.percentage}</td>
                        <td>{s.result}</td>
                    </tr>
                )}
            </tbody>

        </table> */}
        {student.filter(x=>x.result===props.result).map(stud=> <StudentDetails s={stud}/>)}
    </div>
}

function StudentDetails(props){
    return <div>
        <h2>Details for {props.s.id}</h2>
        Name: {props.s.sname} <br/>
        Percentage: {props.s.percentage} <br/>
        Result: {props.s.result} <br/>

    </div>
}

export default StudentComponent;