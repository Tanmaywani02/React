import React from 'react'

function Initial() {
    let line=' '
    for(var i=0; i<12;i++){
        line+='* '
    }
    line += "\n"
    for(var k=0;k<7;k++){
        for(var i=0; i<11; i++){
            line+=' '
        }
        line += '*'
        line += "\n"
    }
  
  return (
    <div className='container mt-3 text-primary '>
      <pre>{line}</pre>
    </div>
  )
}

export default Initial
