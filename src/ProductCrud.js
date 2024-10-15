import React, { useState, useEffect } from 'react'

function ProductCrud() {
    const url = "http://localhost:3000/products"
    const [product, setProduct] = useState([])
    useEffect(()=>{ 
        fetch(url)
            .then(res=>res.json())
                .then(data=>setProduct(data))
    },[product])
    const [display, setdisplay] = useState({id:0, pname:'', brand:'', model:'', price:0})
    const [input, setInput] = useState([{id:0, pname:'', brand:'', model:'', price:0}])
    const handleChange=(e)=>{
        let data = [...input];
        data[0][e.target.name] = e.target.value;
        setInput(data);
    }
    const getByid=()=>{
        var p = product.find(x=>x.id==input[0].id);
        setdisplay(p)
    }

    const create=()=>{
        let data = {id:input[0].id, pname:input[0].pname, brand:input[0].brand, model:input[0].model, price:input[0].price}
        fetch(url,{
            method:"POST",
            body:JSON.stringify(data)
        }).then(res=>res.json())
            .then(data=>console.log(data))
    }
    const update=()=>{
        let data = {id:input[0].id, pname:input[0].pname, brand:input[0].brand, model:input[0].model, price:input[0].price}
        fetch(`${url}/${input[0].id}`,{
            method:"PUT",
            body:JSON.stringify(data)
        }).then(res=>res.json())
            .then(data=>console.log(data))

    }
    const deleteByid=()=>{
        fetch(`${url}/${input[0].id}`,{method:"DELETE"})
            .then(res=>res.json())
            .then(data=>console.log(data))

    }
    

  return <div>
      <h2>List of Products</h2>
      
      
      <table className='table table-bordered table-hover'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {product.map(p=>
                <tr>
                    <td>{p.id}</td>
                    <td>{p.pname}</td>
                    <td>{p.brand}</td>
                    <td>{p.model}</td>
                    <td>{p.price}</td>
                </tr>
            )}   
        </tbody>
      </table>



      Enter<br/>
        ID: <input type='text' name='id' value={input.id} onChange={(e)=>handleChange(e)}/> <br/>
        Name: <input type='text'  name='pname' value={input.pname} onChange={(e)=>handleChange(e)}/> <br/>
        Brand: <input type='text'  name='brand' value={input.brand} onChange={(e)=>handleChange(e)}/> <br/>
        Model: <input type='text'  name='model' value={input.model} onChange={(e)=>handleChange(e)}/> <br/>
        Price: <input type='number'  name='price' value={input.price} onChange={(e)=>handleChange(e)}/> <br/>
            <br/>
        <button onClick={create}>Create</button> <span> </span>
        <button onClick={getByid}>Find</button> <span> </span>
        <button onClick={update}>Update</button> <span> </span>
        <button onClick={deleteByid}>Delete</button> <span> </span>

           
        <hr/>
        ID:  {display.id}<br/>
        Name: {display.pname} <br/>
        Brand: {display.brand} <br/>
        Model: {display.model} <br/>
        Price: {display.price} <br/>
    </div>
  
}

export default ProductCrud;
