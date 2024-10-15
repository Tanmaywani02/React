import React, { useState } from 'react'

function ProductList({products, onSelectProduct, onSelectCat}) {
    // const [p, setp] = useState([]);
    // const handleChange=(e)=>{
    //     var filter = e.target.value;
    //     if(filter=='all'){
    //         setp(products)
    //     }
    // }
  return <div>
    <div id='filters'>
        <div className='filter categoryFilter'>
        <strong>Category</strong>
        <select id="category" name="category" onChange={(e)=>onSelectCat()}>
            <option value="all">All</option>
            <option value="Phone">Phone</option>
            <option value="Laptop">Laptop</option>
            <option value="TV">TV</option>
        </select>
        </div>

        <div className='filter brandFilter'>
        <strong>Brand</strong>
        <select id='brand' name='brand' onChange={(e)=>onSelectCat()}>
            <option value="all">All</option>
            <option value='Samsung'>Samsung</option>
            <option value='LG'>LG</option>
        </select>
        </div>
    </div>
      {/* <ol>
        {products.map((prod,index)=>(
            <li style={{cursor:'pointer'}} key={index} onClick={()=>onSelectProduct(prod)}><p>{prod.pname}</p></li>
        ))}
      </ol> */}
    </div>
  
}

function ProductCard({products}){
    // if(!products) return <h5 style={{padding:'5px 10px 0px 10px'}}>Click Product to see details</h5>
    return (
        <div id='cards' className='d-flex flex-wrap justify-content-between'>
        {/* <ol className=''> */}
            {products.map((prod,index)=>{
                return (        
                    <div style={{width:'250px'}} class='card m-3 p-3 shadow'>
                        <p>
                            <strong>ID:</strong> {prod.id} <br/>
                            <strong>Name:</strong> {prod.pname} <br/>
                            <strong>Category:</strong> {prod.category} <br/>
                            <strong>Brand:</strong> {prod.brand} <br/>
                            <strong>Model:</strong> {prod.model} <br/>
                            <strong>Price:</strong> ₹ {prod.price} <br/>
                            {/* <button className='btn btn-primary' style={{marginRight:'10px'}}>Wishlist</button> */}
                            <button className='btn btn-success'>Add to Cart</button>    
                        </p>   

                        
                </div>
                
                )
            })}
            <div className='d-flex justify-content-center w-100 align-items-center ' style={{height:"fit-content"}}>
                <button className='btn btn-danger m-0'>See More</button>
            </div>
        {/* </ol> */}
    </div>
    )
    // <div style={{width:'250px'}}>
    //     <p><strong>ID:</strong> {p.id} <br/>
    //     <strong>Name:</strong> {p.pname} <br/>
    //     <strong>Category:</strong> {p.category} <br/>
    //     <strong>Brand:</strong> {p.brand} <br/>
    //     <strong>Model:</strong> {p.model} <br/>
    //     <strong>Price:</strong> {p.price} <br/>
    //     </p>   
    // </div>
}

export {ProductCard}
export default ProductList
