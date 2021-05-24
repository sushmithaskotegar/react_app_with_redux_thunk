import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addUsers} from '../actions/userAction'
function UserForm() {
    const [title, settitle] = useState('')
const [author,setauthor]=useState('')
const dispatch=useDispatch()
const submitHandler=(e)=>{
e.preventDefault();
const post={
    id:Math.random(),
    title:title,
    author:author
}
dispatch(addUsers(post))
}
  return (
    <div>
        <form onSubmit={submitHandler}>
      <div>
        <label>title</label>
        <input value={title} onChange={(e)=>settitle(e.target.value)} type="text"></input>
      </div>
      <br />
      <div>
        <label>author</label>
        <input value={author} onChange={(e)=>setauthor(e.target.value)} type="text"></input>
      </div>
      <br />
      <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
