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
        if(passenger.length>1){
            let data = [...passenger]
            data.splice(index,1)
            setPassengers(data)
        }
        else{
            alert("Atleast one passenger is required for ticket booking.")
        }
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
                            placeholder={`Passenger ${index+1}`}
                            name='name'
                            value={input.name}
                            onChange={(e)=>handleChange(index,e)}
                        />
                        <select name='gender' className='form-control' onChange={(e)=>handleChange(index, e)}>
                            <option value="None">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input
                            type='number'
                            placeholder='Age'
                            className='form-control'
                            name='age'
                            value={input.age}
                            onChange={(e)=>handleChange(index,e)}

                        />
                        <select name='preference' className='form-control' onChange={(e)=>handleChange(index, e)}>
                            <option value="none">Preference</option>
                            <option value="Side Lower">Side Lower</option>
                            <option value="Side Upper">Side Upper</option>
                            <option value="Lower">Lower</option>
                            <option value="Middle">Middle</option>
                            <option value="Upper"> Upper</option>
                        </select>
                        {

                        }
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
