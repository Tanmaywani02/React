// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Component1 from './Component1';
import ConsumeAPI from './ConsumeAPI';
import EmployeeCrud from './EmployeeCrud';
import EmployeeList, {EmployeeDetails, AddEmployee, EditEmployee} from './EmployeeList';
import EmployeeComponent from './Employees';
import Form1 from './Form1';
import Forms1 from './Forms1Component';
import Forms2 from './Forms2Component';
import Forms3 from './Forms3Component';
import Forms4 from './Forms4Component';
import Forms5 from './Forms5Component';
import FormsTask1 from './FormsTask1';
import FormTask2 from './FormTask2';
import FormTask3 from './FormTask3';
import FormTask4 from './FormTask4';
import FormTask5 from './FormTask5';
import FormTask6 from './FormTask6';
import List from './List';
import ProductCrud from './ProductCrud';



// import {useEffect, useState} from 'react';
// import { createContext, useContext } from 'react';
// import StudentComponent from './Students';

import StudentCrud from './StudentCrud';
import TrainTicket from './TrainTicket';
import UserRegistration from './UserRegistration';
import CourseList, { AddCourse, CourseDetails, EditCourse } from './CourseList';
import ProductList, { ProductCard } from './ProductList';
import Trafficlight from './Trafficlight';
// import EmployeeComponent from './Employees';
// import PeopleComponent from './People';



// var mycontext = createContext()

// function App() {
//   // var[count, setCount] = useState(0)
//   // var increase = ()=> setCount(count+1)
//   // var decrease = ()=> setCount(count-1)
 
//   // return <div className="container-fluid">
//   //   <h1>App Component</h1>
//   //   Count: {count} <br/>
//   //   <button onClick={increase}>Increase</button> <span></span>
//   //   <button onClick={decrease}>Decrease</button>
//   //   <hr/>
//   // </div>

//   // const [name, setName] = useState("ABC");
//   // useEffect(()=> console.log("Component Mounted..."))
//   // return <div className='container-fluid mt-4'>
//   //   <p>useEffect() demo</p>
//   //   {/* <span>{name}</span>
//   //   <br/>
//   //   <input
//   //     type='text'
//   //     value={name}
//   //     onChange={(e) => {setName(e.target.value);}}
//   //   /> */}
//   // </div>

//   // var sayHello = () => alert("Hello");
//   // return <div className="container-fluid">
//   //   <h1>App Component</h1>
//   //   <button onClick={()=>sayHello()}>Say Hello</button>
//   // </div>
//   // return <div>
//   //   <h1>App Component</h1>
//   //   <PeopleComponent gender="male"/>
//   //   <PeopleComponent gender="female"/>
    
//   //   <br/>
//   //   <StudentComponent result="pass"/>
//   //   <StudentComponent result="fail"/>

//   //   <br/>
//   //   <EmployeeComponent/>
//   // </div>

//   return <div>
//     <h1>App Component (Parent)</h1>
//     <mycontext.Provider value="Content from parent">
//     <ChildComponent/>
//     </mycontext.Provider>
    
//   </div>

// }

// function App(){
//   const [employees, setEmployee] = useState([
//     {"id":1001, "ename": "Anil", "job":"Trainer", "salary": 70000},
//     {"id":1002, "ename": "Seeta", "job":"AA", "salary": 24000},
//     {"id":1003, "ename": "Raju", "job":"Manager", "salary": 21000},
//     {"id":1004, "ename": "Geeta", "job":"A", "salary": 30000},
//     {"id":1005, "ename": "Anil", "job":"Trainer", "salary": 70000},
//     {"id":1006, "ename": "Seeta", "job":"AA", "salary": 24000},
//     {"id":1007, "ename": "Raju", "job":"Trainer", "salary": 21000},
//     {"id":1008, "ename": "Geeta", "job":"A", "salary": 30000},
//     {"id":1009, "ename": "Anil", "job":"Trainer", "salary": 70000},
//     {"id":1010, "ename": "Seeta", "job":"Manager", "salary": 24000},
//     {"id":1011, "ename": "Raju", "job":"Trainer", "salary": 21000},
//     {"id":1012, "ename": "Geeta", "job":"A", "salary": 30000},
//     {"id":1013, "ename": "Anil", "job":"Trainer", "salary": 70000},
//     {"id":1014, "ename": "Seeta", "job":"Trainer", "salary": 24000},
//     {"id":1015, "ename": "Raju", "job":"AT", "salary": 21000},
//     {"id":1016, "ename": "Geeta", "job":"Manager", "salary": 30000},
//   ]);

//   useEffect(()=>{
//     setEmployee(employees)
//     console.log("set")
//   },[employees]);


//   const [emp, setEmp] = useState(null)
//   const handleSetEmp=(e)=>{
//     setEmp(e)
//   } 

// const handleDeleteEmp=(e,id)=>{
//   e.preventDefault();
//   var idx = employees.findIndex((x)=>x.id==id);
//   employees.splice(idx,1)
//   setEmployee(employees)
//   console.log(employees)  
// }

// const handleAddSubmit=(e,emp)=>{
//   e.preventDefault();
//   employees.push(emp[0])
//   setEmployee(employees)
//   document.getElementById("addForm").style.visibility="hidden"  
//   console.log(employees);

// }
// const handleEditSubmit=(e,emp)=>{
//   e.preventDefault()
//   var idx = employees.findIndex((x)=>x.id==emp.id)
//   employees[idx] = emp;
//   setEmployee(employees);
//   console.log(employees)
// }
// const handleAddBtnClick=(e)=>{
//   document.getElementById("addForm").style.visibility="visible";

// }
//   return <div className="container-fluid">
//     <h1>Employee CRUD (Parent Component)</h1>
//     <div style={{display:"flex", gap:"10px"}}>

//       <div class="content" id="list">
//         <EmployeeList employees={employees} onSelectEmp={handleSetEmp} onAddClick={handleAddBtnClick}/>
//       </div>

//       <div class="content" id="details">
//         <EmployeeDetails emp={emp} onDeleteEmp={handleDeleteEmp}/>
//       </div>

//       <div class="content" id="add">
//         <AddEmployee onAddSubmit={handleAddSubmit} />
//       </div>

//       <div class="content" id="edit">
//         <EditEmployee onEditSubmit={handleEditSubmit}/>
//       </div>

//     </div>
  
//   </div>
// }

// function App(){
//   const [courses, setCourse] = useState([])
//     const url = "http://localhost:3000/courses"
//     useEffect(()=>{
//         fetch(url)
//             .then(res=>res.json())
//             .then(data=>setCourse(data))
//     },[courses])
//     const [c, setC] = useState(null)
//     const handleSetC=(course)=>{
//       setC(course)
//     }
//     const handleAddClick=(e)=>{
//       document.getElementById("addForm").style.visibility="visible";
//     }
//     const handleEditClick=(e)=>{
//       document.getElementById("editForm").style.visibility="visible";
//     }
//     const handleAddSubmit=(e,course)=>{
//       let data = course[0]
//       fetch(url,{
//         method:"POST",
//         body:JSON.stringify(data)
//       }).then(res=>res.json())
//         .then(data=>console.log(data))
//     }
//     const handleDeleteCourse=(e,id)=>{
//       fetch(`${url}/${id}`,{
//         method:"DELETE"
//       }).then(res=>res.json())
//         .then(data=>console.log(data))
//       setC(null)
//     }
//     const handleEditSubmit = (e,course)=>{
//       fetch(`${url}/${course.id}`,{
//         method:'PUT',
//         body:JSON.stringify(course)
//       }).then(res=>res.json())
//         .then(data=>console.log(data))
//       setC(course)
      

//     }
//   return <div className='container-fluid'>
//     <h1>Course CRUD</h1>
//     <div style={{display:"flex", gap:"10px"}}>
//       <div class="content" id="list">
//         <CourseList courses={courses} onSelectCourse={handleSetC} onAddClick={handleAddClick}/>
//       </div >

//       <div class="content" id='details'>
//         <CourseDetails c={c} onDeleteCourse={handleDeleteCourse} onEditClick={handleEditClick}/>
//       </div>

//       <div class="content" id="add">
//         <AddCourse onAddSubmit={handleAddSubmit}/>
//       </div>

//       <div class="content" id='edit'>
//         <EditCourse onEditSubmit={handleEditSubmit} editc={c}/>
//       </div>

//     </div>
//   </div>
// }

// function App(){
//   const [products, setProduct] = useState([])
//   const [filterProducts, setFilterProducts] = useState([])
//   const url = "http://localhost:3000/products"
//   useEffect(()=>{
//     fetch(url)
//       .then(res=>res.json())
//       .then(data=>setProduct(data))
//   },[products])
//   const handleSetProd = (prod) =>{
//     setP(prod);
//   }
//   const handleSetCat=()=>{
//     var c = document.getElementById("category").value;
//     var b = document.getElementById("brand").value;

//     if(c=='all' && b=='all'){
//       setFilterProducts(products)
//     }
//     else if(c=='all' && b!='all'){
//       setFilterProducts(products.filter((x)=>x.brand==b));
//     }
//     else if(c!='all' && b=='all'){
//       setFilterProducts(products.filter((x)=>x.category==c))
//     }
//     else{
//       setFilterProducts(products.filter((x)=>x.category==c && x.brand==b))
//     }
//   }
  
//   const [p, setP] = useState(null);
//   return <div className='container-fluid mt-4'>
//     <div>
//       <div className="content" id='list'>
//         <ProductList onSelectCat={handleSetCat}/>
//       </div>
//       <div className='content' id='details'>
//         <ProductCard products={filterProducts.length==0?products:filterProducts}/>
//       </div>
//     </div>
//   </div>
// }

function App(){
  const lightState =  {
    red : {
        duration: 2000,
        backgroundColor: "red",
        next:"yellow"
    },
    yellow: {
        duration: 1000,
        backgroundColor: "yellow",
        next:"green"
    },
    green: {
        duration: 3000,
        backgroundColor: "green",
        next:"red"
    }
}
  return(
    <div className=''>
  <Trafficlight trafficstate={lightState}/>
  </div>
  )
}



export default App;

// function ChildComponent(){
//   var value = useContext(mycontext);
//   return <div>
//     <h1>Child Component</h1>
//     Value is : {value}
//   </div>
// }

// function Wishes(props){
//   return <div>
//   <h1>Wishes Component</h1>
//   Hello {props.name}, Welcome
//   </div>
// }

// function FruitsComponent(){
//   var fruits = ["Apple", "Banana", "Cherry", "Grapes", "Mango"]
//   return <div>
//     <h2>Fruits Component</h2>
//     <ol>
//       {fruits.map(x=><li>{x}</li>)}
//     </ol>
//   </div>
// }


