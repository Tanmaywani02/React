import React, { useState } from 'react'

function FormsTask1() {
    const [isCommentBoxShow, setIsCommentBoxChecked] = useState(false);
    const toggleComments=(e)=>{
        if(isCommentBoxShow==true){
            setIsCommentBoxChecked(false)
        }
        else{
            setIsCommentBoxChecked(true);
        }
    }
  return (
    <div>
      <h2>Form Task 1</h2>
      <form>
        <input type='checkbox' onChange={toggleComments}/> Add Comment
        <br/>
        {isCommentBoxShow && (
            <textarea disabled={!isCommentBoxShow}></textarea>
        )}
      </form>
    </div>
  )
}

export default FormsTask1;
