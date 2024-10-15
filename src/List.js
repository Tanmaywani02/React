import React, {useState, useEffect} from 'react'
import India from '../src/images/indiaFlag.png'
import USA from '../src/images/usaFlag.png'
import Japan from '../src/images/japanFlag.png'
import Russia from '../src/images/russiaFlag.png'


function Countries(){
    const countries = ['India', 'Japan', 'USA', 'Russia'];
    const dic={
        'India':India,
        'Japan':Japan,
        'USA':USA,
        'Russia':Russia
    }
    return (<List country={countries} d={dic}/>);
}

function List(props) {  
    const [countries, setCountries] = useState([])
    const [sub, setSub] = useState(false)
    const flagList = countries.map((list)=>(
        <div style={{margin:"50px"}}>
        <img src={props.d[list]}/>
        </div>
    ))
    const [isCountrySelected, setIsCountrySelected] = useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSub(true)

    }
    const handleChange=(e)=>{
        if(e.target.checked==true){
            countries.push(e.target.value)
            setCountries(countries)
        }
        else if(e.target.checked==false){
            var idx = countries.indexOf(e.target.value)
            if(idx !== -1){
                countries.splice(idx, 1)
                setCountries(countries);
            }
        }
        if(countries.length>0){
            setIsCountrySelected(true)
        }
        else if(countries.length<=0){
            setIsCountrySelected(false)
        }
        console.log(countries)
    }
    const toggleState=()=>{
        var el = document.getElementById("list");
        if(el.style.visibility==="hidden"){
            el.style.visibility="visible";
        }
        else{
            el.style.visibility="hidden"
        }
    }
    
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <button onClick={toggleState}>List of Countries</button>
      <div id="list" style={{visibility:"hidden"}}>
        <hr/>
        <p>Count of countries : {props.country.length}</p>
        <hr/>
        <div>{props.country.map((c)=> <p><input type='checkbox' value={c} name='country' onChange={(e)=>handleChange(e)}/>{c}</p>)}</div>
        <button disabled={!isCountrySelected} id='submitbtn' onClick={(e)=>handleSubmit(e)}>Submit</button>
        {sub==true && flagList}
      </div>
    </div>
  )
}

export default Countries;
