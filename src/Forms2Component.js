import { useState } from "react";

function Forms2(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMsg(`Name: ${name}, Email:${email}`);
    }

    return <div>
        <h2>Forms 2</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label for="name">Enter Your Name:</label>
            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}></input> <br/>

            <label>Enter Your Email:</label>
            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input> <br/>

            <input type="submit"/>
            <br/>
            {msg}
        </form>
    </div>
}
export default Forms2;