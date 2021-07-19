import React, {useState} from "react";
import './App.scss'
import Header from './components/Header';
import Table from './components/Table';
import { v4 as uuidv4 } from 'uuid';

export const UserContext = React.createContext()

function App() {
  const [users, setUsers] = useState(sampleUsers)
  const [searchValue, setSearchValue] = useState("")


  //Toggle Status
  const toggleStatus = (id) => {
    setUsers(
      users.map((user) => 
      user.id === id ? {...user, status: !user.status} : user

      )
      )
}

//Delete User
const deleteUser = (id) => {
  setUsers(
    users.filter((user) => 
    user.id !== id 
    )
  )
}

  //useContext Values
  const userContextValue = {
    toggleStatus,
    deleteUser,
    searchValue,
    setSearchValue,
    users
  }

  return (
    <UserContext.Provider value={userContextValue}>
      <Header />
      <Table users={users} onToggle={toggleStatus}/>
    </UserContext.Provider>
      
  );
}

//Creating JSON data
const sampleUsers = [
  {
    "id": 1,
    "name": 'Danniel Blichman',
    "mail": 'danniel.blichman@testtask.com',
    "role": 'admin',
    "status": true
  },
  {
    "id": 2,
    "name": 'Margarette Jones',
    "mail": 'margarette.jones@testtask.com',
    "role": 'User',
    "status": false
  },
  {
    "id": 3,
    "name": 'Bethany Doe',
    "mail": 'bethany.doe@testtask.com',
    "role": 'admin',
    "status": false
  }
] 

export default App;
