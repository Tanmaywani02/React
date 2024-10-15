// import { Component } from "react";
import { useState, useEffect } from "react";

// class ConsumeAPI extends Component{
//     state = {products:[]}
    
//     constructor(){
//         super();
//         var url = "https://fakestoreapi.com/products"
//         fetch(url)
//             .then(response=>response.json().then(data=>this.setState(data)))
//             .catch(error=>console.log(`error: ${error}`));
        
//     }
//     // componentDidMount(){
        
//     // }
//     render(){
//         return <div>
//             <h2>List of Products</h2>
//             {/* {this.state.products.map((e)=>{console.log(e.id)})} */}
//             {console.log(this.state.products)}
//             {this.state.msg}
//         </div>
//     }
// }

// export default ConsumeAPI;

function ConsumeAPI(){
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(data=>setUser(data));
    },[])

    return <div>
        {
            user && user.map((i,index)=>(
                <div className="card" style={{width:18+'rem'}}>
                    <img src={i.image} className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title">{i.title}</h5>
                        <p className="card-text">{i.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>

                </div>
            )
        )}
    </div>


}

export default ConsumeAPI;