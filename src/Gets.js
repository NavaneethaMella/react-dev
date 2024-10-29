import axios from 'axios';
import { useEffect,useState} from "react"

function Gets() {
  
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //addUser();
    // Make a request for a user with a given ID
   axios
      .get('https://reqres.in/api/users?page=2')
      .then(res => setUsers(res.data.data))
      
      .catch(err =>
        console.log(err));
      
      
  }, []);

  
  return (
    <>
    
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>
              {user.first_name} {user.last_name}
            </td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default Gets;

