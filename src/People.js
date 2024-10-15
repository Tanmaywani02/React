var people = [
    {"id":1001, "pname":"Anil", "gender": "male", "age":12},
    {"id":1002, "pname":"Raju", "gender": "male", "age":18},
    {"id":1003, "pname":"Ram", "gender": "male", "age":13},
    {"id":1004, "pname":"Seeta", "gender": "female", "age":16}
  ]
  
  function PeopleComponent(props){
    return <div>
      <h1>List of {props.gender}</h1>
      {/* {people.filter(x=>x.gender === props.gender).map(p=> <PersonDetails p={p}/>)} */}
      {people.map(x=> <PersonDetails p={x}/>)}
    </div>
  }
  
  function PersonDetails(props){
    
      return <div>
        <h2>Details of {props.p.id}</h2>
        Name: {props.p.pname} <br/>
        Gender: {props.p.gender} <br/>
        Age: {props.p.age} <br/>
  
      </div>
  }

export default PeopleComponent