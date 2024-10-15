import {useState} from 'react';

function TrainTicket(){
    const submit = (e)=>{
        e.preventDefault();
        console.log(inputFields);
    }
    const addFields = ()=>{
        let newfields = {uname:'', age:'', email:'', doj:''}
        setInputFields([...inputFields, newfields])
    }
    const removeFields=(index)=>{
        let data = [...inputFields];
        data.splice(index, 1);
        setInputFields(data)
    }
    const[inputFields, setInputFields] = useState([{uname:'', age:'', email:'', doj:''}])
    const handleChange=(index, e)=>{
        let data = [...inputFields];
        data[index][e.target.name] = e.target.value;
        setInputFields(data);
    }
    return <div>
        <h2>Train Ticket</h2>
        <form onSubmit={submit} className='border border-black'>
            {inputFields.map((input, index) => {
                return (
                    <div key={index}  className='d-flex flex-column mb-3 p-2'>
                        <table>
                            <tr>
                                <th><label for='uname'>Name</label></th>
                                <th><label for='age'>Age</label></th>
                                <th><label for='email'>Email</label></th>
                                <th><label for='doj'>DOJ</label></th>
                            </tr>
                            <tr>
                                <td><input type='text' id='uname' name='uname' value={input.uname} onChange={(e)=>handleChange(index, e)}/></td>
                                <td><input type='number' id='age' name='age' value={input.age} onChange={(e)=>handleChange(index, e)}/></td>
                                <td><input type='email' id='email' name='email' value={input.email} onChange={(e)=>handleChange(index, e)}/></td>
                                <td><input type='date' id='doj' name='doj' value={input.doj} onChange={(e)=>handleChange(index, e)}/></td>
                                <td><input type='button' value='Remove' onClick={()=>removeFields(index)}/></td>
                            </tr>
                        </table>
                    </div>
                )
            })}       
        </form>
        <input type='button' value='+ Add Passenger' onClick={addFields} className='mt-3'/>
        {/* <br/> */}
        <input type='submit' onClick={submit} className='m-3'/>
    </div>
}

export default TrainTicket;