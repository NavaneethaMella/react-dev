/*const Delete = async (id) => {
  try {
    const response = await axios.delete('https://reqres.in/api/users/2');
    console.log('Delete successful:', response.data);
  } catch (error) {
    console.error('Error deleting data:', error);
  } 
}

import axios from 'axios';
import {useEffect , useState} from 'react'
function Delete(){
  const [data ,setData]=useState([])
  useEffect(()=>{
    axios.delete()
    .then((response)=> {console.log(response)})
  })
  return(
    <>
    <label>Firstname</label>
    <input type="text" name="first_name" value
    </>
  )
}*/
import './App.css';
import axios from 'axios';
import {useEffect,useState} from "react"

function Delete() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //addUser();
    // Make a request for a user with a given ID
    axios
      .get('https://reqres.in/api/users?page=2')
      .then(function (response) {
        setUsers(response.data.data);
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const deleteRecord = (id) => {
    axios
      .delete('https://reqres.in/api/users/${id}')
      .then(() => {
        // Remove the deleted user from the state
        setUsers(users.filter(user => user.id !== id));
        console.log('User with ID ${id} deleted');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {users.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>
              {user.first_name} {user.last_name}
            </td>
            <td>{user.email}</td>
            <td>
              <a href="https://reqres.in/api/users/2">View User</a>
            </td>
            <td><button onClick={() => deleteRecord(user.id)}>Delete</button> </td> 
          </tr>
        ))}
      </table>
      <a href="https://reqres.in/api/users/2">Add User</a>
    </>
  );
}

  export default Delete  

  


  