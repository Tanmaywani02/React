import { useState } from "react";

function Forms3(){
    const [inputs, setInputs] = useState({})
    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values=>({...values, [name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`${inputs.uname} | ${inputs.age}`);
    }
    return <div>
        <h2>Forms 3</h2>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
            <input type="text" name="uname" value={inputs.uname || ""} onChange={handleChange}></input></label>
            <br/>
            <label>Enter your age:
            <input type="number" name="age" value={inputs.age || ""} onChange={handleChange}></input></label> <br/>
            <input type="submit"/>
        </form>
    </div>
}
export default Forms3;