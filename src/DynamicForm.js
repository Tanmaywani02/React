import React, { useState } from 'react'

function DynamicForm() {
    const [inputFields, setInputFields] = useState([{name:'', age:''}])

    const handleFormChange=(index,e)=>{
        let data = [...inputFields];
        data[index][e.target.name] = e.target.value;
        setInputFields(data);
    }

    const addFields=(e)=>{
        e.preventDefault();
        let newField = {name:'', age:''}
        setInputFields([...inputFields, newField ])
    }

    const submit=(e)=>{
        e.preventDefault();
        console.log(inputFields)
    }

    const remove = (index, e) =>{
        e.preventDefault();
        let data = [...inputFields]
        data.splice(index, 1)
        setInputFields(data)
    }

  return (
    <div className='container mt-5'>
       <form>
        {inputFields.map((input, index)=>{
            return(
            <div key={index} className='d-flex justify-content-around shadow p-3 m-4 gap-5'>
            <input 
                class="form-control"
                value={input.name}
                placeholder='Name'
                name='name'
                onChange={(e)=>handleFormChange(index,e)}
            />
           
            <input 
                class="form-control"
               value={input.age}
                placeholder='Age'
                name='age'
                onChange={(e)=>handleFormChange(index,e)}
            />
        
            <button onClick={(e)=>remove(index,e)} className='btn btn-danger'>Remove</button>
        </div>
        )
        })}
        <p></p>
        <div className='d-flex gap-3 m-4 p-3'>
          <button onClick={(e)=>addFields(e)} className='btn btn-primary'>Add more...</button> 

          <button onClick={(e)=>submit(e)} className='btn btn-success'>Submit</button>  
          </div>
       </form>
    </div>
  )
}

export default DynamicForm
