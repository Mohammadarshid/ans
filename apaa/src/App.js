// import react, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// function App() {
//   const [users, SetUsers] = useState("");

//   const getusers = async () => {
//     try {
//       const { data } = await axios.get(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       console.log(data);
//       // SetUsers(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getusers();
//   }, []);
//   return (
//     <>
//       <div className="container">
//         <div className="text-center">Post User App</div>
//         <div className="container">
//           <div className="container">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Username</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users &&
//                 users.map((user) => (
//                   <div className="card" key={user.id}>
//                     <p>{user.id}</p>
//                     <p>{user.name}</p>
//                     <p>{user.username}</p>
//                   </div>
//                 ))}
//             </tbody>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
        <div className="text-center">Post User App</div>
        <table className="table">
          <thead className="thread">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>email</th>
              <th>address</th>
              <th>website</th>
              <th>phone</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => (
                <tr key={user.id} p="3">
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.street}</td>
                  <td>{user.website}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
