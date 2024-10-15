import React, { useState } from 'react'

function EmployeeList({employees, onSelectEmp, onAddClick}) {
    // const [emp, setEmp] = useState({})
    // const handleAddBtnClick=()=>{
    //     document.getElementById("addForm").style.visibility="visible";
    // }

    return <div>
    <ol>
        {employees.map((emp)=>   
            <li><p style={{cursor:'pointer'}} key={emp.id} onClick={()=>onSelectEmp(emp)}>{emp.ename}</p></li>
        )}
    </ol> 
    <button onClick={(e)=>onAddClick(e)}>+ Add New</button>

</div>
}


function EmployeeDetails({emp, onDeleteEmp}){
    if(!emp) return <h5>click name to see details</h5>

    return <div>
        <h5>Details</h5>
        <p><strong>ID:</strong> {emp.id} <br/>
        <strong>Name:</strong> {emp.ename} <br/>
        <strong>Job:</strong> {emp.job} <br/>
        <strong>Salary:</strong> {emp.salary} <br/></p>
        <button onClick={(e)=>{onDeleteEmp(e,emp.id)}}>Delete</button>
    </div>
}


function AddEmployee({onAddSubmit}){
    
    const [newEmp, setNewEmp] = useState([{id:'', ename:'', job:'', salary:''}])
    const handleInputChange = (index,e) =>{
        let data = [...newEmp];
        if( e.target.name =='id' || e.target.name=='salary'){
            data[index][e.target.name] = parseInt(e.target.value);
        }
        else{  
            data[index][e.target.name] = e.target.value;
        }
        setNewEmp(data);
    }

    return <div>
        {/* <button onClick={()=>handleAddBtnClick()}>+ Add New</button> */}
        <div id='addForm' style={{visibility:"hidden"}}>
            {newEmp.map((input, index)=>{
                return (
                    <div key={index}>
                        <table>
                            <tr>
                                <th>ID</th>
                                <td><input type='number' name='id' value={input.id} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                            <tr>
                                <th>Employee Name</th>
                                <td><input type='text' name='ename' value={input.ename} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                            <tr>
                                <th>Job</th>
                                <td><input type='text' name='job' value={input.job} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                            <tr>
                                <th>Salary</th>
                                <td><input type='number' name='salary' value={input.salary} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                        </table>
                        <button onClick={(e)=>{onAddSubmit(e,newEmp); setNewEmp([{id:'', ename:'', job:'', salary:''}])}}>Submit</button>
                    </div>
                )
            })}  
        </div>
    </div>
}


function EditEmployee({onEditSubmit}) {
    const handleEditBtnClick=()=>{
        document.getElementById("editForm").style.visibility="visible";
    }
    const [newEmp, setNewEmp] = useState([{id:'', ename:'', job:'', salary:''}])
    const handleInputChange = (index,e) =>{
        let data = [...newEmp];
        if( e.target.name =='id' || e.target.name=='salary'){
            data[index][e.target.name] = parseInt(e.target.value);
        }
        else{  
            data[index][e.target.name] = e.target.value;
        }
        setNewEmp(data);
    }
    return <div>
        <button onClick={()=>handleEditBtnClick()}>Edit</button>
            <div id='editForm' style={{visibility:"hidden"}}>
            {newEmp.map((input, index)=>{
                return (
                    <div key={index}>
                        <table>
                            <tr>
                                <th>ID</th>
                                <td><input type='number' name='id' value={input.id} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                            <tr>
                                <th>Employee Name</th>
                                <td><input type='text' name='ename' value={input.ename} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                            <tr>
                                <th>Job</th>
                                <td><input type='text' name='job' value={input.job} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                            <tr>
                                <th>Salary</th>
                                <td><input type='number' name='salary' value={input.salary} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                        </table>
                        <button onClick={(e)=>{onEditSubmit(e,newEmp); setNewEmp([{id:'', ename:'', job:'', salary:''}])}}>Submit</button>
                    </div>
                )
            })}  
            </div>
    </div>
}


export {EmployeeDetails, AddEmployee, EditEmployee};

export default EmployeeList
