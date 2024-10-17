import React, {useContext, useState} from 'react'
import { CustContext } from './App';

function CustomerList() {
    const data = useContext(CustContext)
    const {customers, setcustomers} = data
    const [temp, setTemp ] = useState({})
    const handleClick=(c)=>{
        document.getElementById('details').style.visibility = "visible";
        setTemp(c)
    }

    const onAddClick=()=>{
        document.getElementById('addForm').style.visibility = "visible";
    }

    const onModifyClick=()=>{
        document.getElementById('modifyForm').style.visibility = "visible";
    }

    const deleteCust=(e,id)=>{
        fetch(`http://localhost:3000/customers/${id}`,{
            method:'DELETE'
        }).then(res=>res.json())
            .then(data=>console.log(data))
        document.getElementById('details').style.visibility = "hidden";
        setTemp({})
    }
    const addCust=(e)=>{
        let id1 = document.getElementById("id").value
        let name1 = document.getElementById("name").value
        let amt1 = document.getElementById("amt").value
        let data = {"id": id1, "cname":name1, "amount":amt1}

        fetch("http://localhost:3000/customers",{
            method:'POST',
            body:JSON.stringify(data)
        }).then(res=>res.json())
            .then(data=>console.log(data))
        document.getElementById("id").value = ''
        document.getElementById("name").value = ''
        document.getElementById("amt").value = 0
        document.getElementById('addForm').style.visibility = "hidden";

    }

    const modifyCust=(e,id)=>{
        let name2 = document.getElementById("new_name").value
        let amt2 = document.getElementById("new_amt").value
    
        let data = {"id": id, "cname":name2, "amount":amt2}
    
        fetch(`http://localhost:3000/customers/${id}`,{
            method:'PUT',
            body:JSON.stringify(data)
        }).then(res=>res.json())
            .then(data=>console.log(data))
    
        document.getElementById("new_name").value = ''
        document.getElementById("new_amt").value = 0
        document.getElementById('modifyForm').style.visibility = "hidden";
    
        setTemp(data)
    
    
    }

  return (
    <div className='wrapper'>
    <div className='content' id='list'>
        <ol>
        {customers.map((c)=>{
        return <li key={c.id}><p style={{cursor:"pointer"}} onClick={()=>handleClick(c)}>{c.cname}</p></li>
        })}
        </ol>
        <button onClick={()=>onAddClick()} className='btn btn-primary'>+ Add Customer</button>
    </div>
 
        <div className='content' id='details' style={{visibility:"hidden"}}>
            <p>
                <strong>ID:</strong> {temp.id} <br/>
                <strong>Name:</strong> {temp.cname} <br/>
                <strong>Amount:</strong> {temp.amount} <br/>
                <button onClick={(e)=>deleteCust(e,temp.id)} className='btn btn-primary'>Delete</button> <span> </span>
                <button onClick={(e)=>onModifyClick()} className='btn btn-primary'>Modify</button>

            </p>
        </div>

        <div className='content' id='addForm' style={{visibility:"hidden"}}>
            <p>
                <strong>ID:</strong> <input type='text' id='id'/> <br/>
                <strong>Name:</strong> <input type='text' id='name'/> <br/>
                <strong>Amount:</strong> <input type='number' id='amt'/> <br/>
                <button onClick={(e)=>addCust(e)} className='btn btn-primary'>Add</button>
            </p>
        </div>

        <div className='content' id='modifyForm' style={{visibility:"hidden"}}>
            <p>
                <strong>Name:</strong> <input type='text' id='new_name'/> <br/>
                <strong>Amount:</strong> <input type='number' id='new_amt'/> <br/>
                <button onClick={(e)=>modifyCust(e,temp.id)} className='btn btn-primary'>Update</button>
            </p>
        </div>
    </div>
  )
}

export default CustomerList;
