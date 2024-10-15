import React, { useEffect, useState } from 'react'

function CourseList({courses, onSelectCourse, onAddClick}) {

  return <div>
    <ol>
      {courses.map((c,index)=>(
            <li><p style={{cursor:'pointer'}} key={index} onClick={()=>onSelectCourse(c)}>{c.course}</p></li>
        ))
      }
      <button onClick={(e)=>onAddClick(e)}>Add New</button>
      </ol>
    </div>
  
}

function CourseDetails({c, onDeleteCourse, onEditClick}){
    if(!c) return <h5>Click Course to see details</h5>
    return <div>
        <h5>Details</h5>
        <p><strong>ID: </strong> {c.id} <br/>
        <strong>Course: </strong> {c.course} <br/>
        <strong>HoD: </strong> {c.hod} <br/>
        <strong>Fees: </strong> {c.fee} <br/>
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <button onClick={(e)=>{onDeleteCourse(e,c.id)}}>Delete</button>
        <button onClick={(e)=>{onEditClick(e,c.id)}}>Edit</button>
        </div>
        </p>
    </div>
}

function AddCourse({onAddSubmit}){
    const [newCourse, setNewCourse] = useState([{'id':'', 'course':'', 'hod':'', 'fee':''}])
    const handleInputChange=(index, e)=>{
        let data = [...newCourse];
        if(e.target.name == 'fee'){
            data[index][e.target.name] = parseInt(e.target.value)
        }
        else{
            data[index][e.target.name] = e.target.value;
        }
        setNewCourse(newCourse);
    }

    return <div>
        <div id='addForm' style={{visibility:'hidden'}}>
        {newCourse.map((input, index)=>{
            return(
                <div key={index}>
                    <table>
                            <tr>
                                <th>ID</th>
                                <td><input type='text' name='id' value={input.id} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                            <tr>
                                <th>Course Name</th>
                                <td><input type='text' name='course' value={input.course} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                            <tr>
                                <th>HoD</th>
                                <td><input type='text' name='hod' value={input.hod} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                            <tr>
                                <th>Fee</th>
                                <td><input type='number' name='fee' value={input.fee} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                        </table>
                        <button onClick={(e)=>{onAddSubmit(e,newCourse); setNewCourse([{id:'', course:'', hod:'', fee:''}]); document.getElementById("addForm").style.visibility="hidden"}}>Submit</button>
                </div>
            )
        })}

        </div>
    </div>
}

function EditCourse({onEditSubmit, editc}){
    const [editCourse, setEditCourse] = useState([{id:'', course:'', hod:'', fee:''}])
    const handleInputChange=(index, e)=>{
        let data = [...editCourse];
        data[index]['id']=editc.id;
        if(e.target.name == 'fee'){
            data[index][e.target.name] = parseInt(e.target.value)
        }
        else{
            data[index][e.target.name] = e.target.value;
        }
        setEditCourse(editCourse);
    }
    // if(editCourse){
    return <div>
        <div id='editForm' style={{visibility:'hidden'}}>
        {editCourse.map((input, index)=>{
            return(
                <div key={index}>
                    <table>
                            {/* <tr>
                                <th>ID</th>
                                <td><input type='text' name='id' value={editc.id} disabled required/></td>
                            </tr> */}
                            <tr>
                                <th>Course Name</th>
                                <td><input type='text' name='course' value={input.course} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                            <tr>
                                <th>HoD</th>
                                <td><input type='text' name='hod' value={input.hod} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                            <tr>
                                <th>Fee</th>
                                <td><input type='number' name='fee' value={input.fee} onChange={(e)=>handleInputChange(index,e)} required/></td>
                            </tr>
                        </table>
                        <button onClick={(e)=>{onEditSubmit(e,editCourse[0]); setEditCourse([{id:'', course:'', hod:'', fee:''}]); document.getElementById("editForm").style.visibility="hidden"}}>Submit</button>
                </div>
            )
        })}

        </div>
    </div>
// }
}

export {CourseDetails, AddCourse, EditCourse}
export default CourseList
