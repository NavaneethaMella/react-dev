import { useState, useEffect } from "react";
import axios from 'axios'

function Update(){

    const [post ,setpost] =useState({
        name:'',
        job:''
    })
    useEffect(() =>{
        axios.get('https://reqres.in/api/users/2').then(res =>console.log(res.data))
    },[])
    const handleInput =(event) =>{
        setpost({...post,[event.target.name]: event.target.value})
    }
    
    const handleSubmit =(event) =>{
        event.preventDefault();
        axios.put('https://reqres.in/api/users/2' ,{post})
        .then(res => console.log(res))
         .catch(err => console.log(err))  
        }
    
return (
    <div>
        <form onsubmit={handleSubmit}>
            <div>
            <label>Name:</label>
            <input type="text" name="name"   
            onChange={handleInput}/>
            </div>
            <div>
            <label>Job:</label>
            <input type="text" name="job"   
             onChange={handleInput}/>
            </div>
            <br/>
            <button >Update</button>
        </form>
    </div>
)
}
export default Update
