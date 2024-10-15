import { useState } from "react";

function Forms5(){
    const[myCar, setMycar] = useState(null);
    const handleChange = (e)=>{
        setMycar(e.target.value)
    }
    const handleSubmit=(e)=>{
        alert(myCar);
    }
    return <div>
        <h2>Forms 5</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <select value={myCar} onChange={handleChange}>
                <option value={null}>-Select-</option>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select> <br/>
        <input type="submit"/>
        </form>
    </div>
}
export default Forms5;