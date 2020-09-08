import React from 'react';
import './App.css';
import {fakeData} from "../src/Data/fakeData";
import { useState } from 'react';
import { useEffect } from 'react';
import Section from './Component/Section';
import Count from './Component/CountUser/Count';

function App() {
  const [users, setUsers] = useState([]);
  const [User, setUser] = useState([]);
  const handleAddUser = (user) => {
    console.log('user added', user);
    const newUser= [...User, user];
    setUser(newUser);
  }



  useEffect( () => {
    setUsers(fakeData);
  }, [] );

  
  return (
    <div className="App">
      
        <div className="user-info">
          {
            users.map( user => <Section 
              addUser ={handleAddUser}
              user= {user} key = {user._id}></Section> )
          }
        </div>
        <div className="user-count" >
              <Count User={User}></Count>
        </div> 
          
    </div>
  );
}

export default App;
