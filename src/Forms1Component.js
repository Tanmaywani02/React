import { useState } from "react";

function Forms1(){
    const [name, setName]=useState("");
    return <div>
        <h2>Forms 1</h2>
        <form>
            <label for="name">Enter Your Name:</label>
            <input id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <br/>
            Hello {name}
        </form>
    </div>
}
export default Forms1;