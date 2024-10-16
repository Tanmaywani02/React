import React, { useContext, useState } from 'react'
import { AppContext } from './App';

function SearchComponent() {
    const data = useContext(AppContext)
    const {products, setProducts} = data

    const handleSearch = (e)=>{
        let search = e.target.value;
        console.log(search)
        let url = `http://localhost:3000/products`;
        fetch(`${url}?pname_like=${search}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
        
    }

    const showAllProducts=(e)=>{
        // e.preventDefault();
        fetch("http://localhost:3000/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))

        document.getElementById("showAll").disabled = true
    }
  return (
    <div className='mt-3'>
        <div className='d-flex justify-content-center align-items-center' style={{height:"100px"}}>
            <input type='text' placeholder='Search' className='w-50 h-50' onChange={(e)=>handleSearch(e)}></input>
        </div>
        <br></br>
        <div id='products' className='d-flex gap-2 flex-wrap justify-content-between p-2'>
            {/* {console.log(products)} */}
            {products.map((p)=>{
                return (
                <div class="card shadow" style={{width:"18rem"}}>
                <div class="card-body">
                  <h5 class="card-title">{p.pname}</h5>
                  <p class="card-text">
                  <strong>Category :</strong> {p.category} <br/>
                <strong>Brand :</strong> {p.brand} <br/>
                <strong>Model :</strong> {p.model} <br/>
                <strong>Price :</strong> {p.price} <br/>

                  </p>
                  <a href="#" class="btn btn-danger">Delete</a>
                </div>
              </div>
              )
                
            })}
        </div>

        <div className='d-flex w-100 justify-content-center align-items-center mt-3' style={{height:"100px"}}>
            <button className='btn btn-primary' onClick={(e)=>showAllProducts(e)} id='showAll'>Show All Products</button>
        </div>


    </div>
  )
}

export default SearchComponent
