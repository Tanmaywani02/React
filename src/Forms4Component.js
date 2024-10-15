import { useState } from "react";

function Forms4(){
    const [textarea, setTextarea] = useState("");
    const handleChange=(e)=>{
        setTextarea(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(textarea);
    }
    return <div>
        <h2>Forms 4</h2>
        <form onSubmit={handleSubmit}>
            <textarea value={textarea} onChange={handleChange}></textarea> <br/>
            <input type="submit"></input>
        </form>
    </div>
}
export default Forms4;