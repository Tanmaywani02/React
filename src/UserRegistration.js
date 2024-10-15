// import formData
// import { useForm } from 'react-hook-form'
import React, {useState} from 'react';

var data = [

];


function UserRegistration() { 
    const submit = (e) =>{
        e.preventDefault();
        // console.log(inputFields[0]);
        data.push(inputFields[0])
        console.log(data)
    }
    const [inputFields, setInputFields] = useState([{name: '', email: '', pass:''}])
    const handleFormChange=(index, event)=>{
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }
    return <div>
        <h2>User Registration Form</h2>
        <form onSubmit={submit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={input.name}
                onChange={e => handleFormChange(index, e)}
              /> <br/>
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={input.age}
                onChange={e => handleFormChange(index, e)}
              /> <br/>
              <input
                type='password'
                name="pass"
                placeholder='Password'
                value={input.pass}
                onChange={e=>handleFormChange(index,e)}
              />
              <br/>
              <button onClick={submit}>Submit</button>

              
              

            </div>
          )
        })} 

      </form>
    </div>
}

export default UserRegistration;