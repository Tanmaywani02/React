import React, { useState } from 'react'

function DynamicTrainTicket() {

    const [passenger, setPassengers] = useState([{name:'',gender:'', age:'', preference:''}])

    const handleChange=(index,e)=>{
        let data = [...passenger]
        data[index][e.target.name] = e.target.value;
        setPassengers(data);
    }

    const addFields=(e)=>{
        e.preventDefault();
        setPassengers([...passenger, {name:'',gender:'', age:'', preference:''}])
    }

    const submit=(e)=>{
        e.preventDefault();
        console.log(passenger)
        
    }

    const remove=(index,e)=>{
        e.preventDefault();
        let data = [...passenger]
        data.splice(index,1)
        setPassengers(data)
    }

  return (
    <div className='container mt-5 '>
        
        <form>
            {passenger.map((input,index)=>{
                return(
                    <div key={index} className='d-flex justify-content-around shadow p-3 m-3 gap-4'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Passenger Name'
                            name='name'
                            value={input.name}
                            onChange={(e)=>handleChange(index,e)}
                        />
                        <input
                            type='text'
                            placeholder='Gender'
                            className='form-control'
                            name='gender'
                            value={input.gender}
                            onChange={(e)=>handleChange(index,e)}

                        />
                        <input
                            type='number'
                            placeholder='Age'
                            className='form-control'
                            name='age'
                            value={input.age}
                            onChange={(e)=>handleChange(index,e)}

                        />
                        <input
                            type='text'
                            placeholder='Preference'
                            className='form-control'
                            name='preference'
                            value={input.preference}
                            onChange={(e)=>handleChange(index,e)}
                        />
                        <button onClick={(e)=>remove(index,e)} className='btn btn-danger'>Remove</button>
                    </div>
                )
            })}
            <div className='d-flex mt-3 gap-5 p-3 m-3'>
            <button onClick={(e)=>addFields(e)} className='btn btn-primary'>Add more...</button>
            <button onClick={(e)=>submit(e)} className='btn btn-success'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default DynamicTrainTicket
