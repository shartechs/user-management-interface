import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss'
import Header from './components/Header';
import Table from './components/Table';
import { v4 as uuidv4 } from 'uuid';
import UserSetup from "./components/UserSetup";
import AddUserBtn from './components/AddUserBtn';
import UserSearch from './components/UserSearch';

export const UserContext = React.createContext()

function App() {
  // Users State
  const [users, setUsers] = useState(sampleUsers)

  // Search filter input state
  const [searchValue, setSearchValue] = useState("")
  
  // For UserAdd Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Toggle Status
  const toggleStatus = (id) => {
    setUsers(
      users.map((user) => 
      user.id === id ? {...user, status: !user.status} : user

      )
      )
}

// Add User
const addNewUser = (user) => {
  const id = uuidv4()
  let status = false
  const newUser = {id, ...user, status}
  setUsers([...users, newUser])
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
    users,
    show,
    handleClose,
    handleShow,
    addNewUser
  }

  return (
    <Router>
    <UserContext.Provider value={userContextValue}>

      <div className="main-content">
        <Switch>
          <Route exact path="/">
            <Header 
            title="Project Access" 
            button={<AddUserBtn/>}
            searchBox={<UserSearch/>}
            />
            <Table/>
          </Route>
          <Route path="/user-setup">
            <Header title="User Setup"/>
            <UserSetup/>
          </Route>
        </Switch>
      </div>

    </UserContext.Provider>
    </Router>

      
  );
}

//Creating JSON data
const sampleUsers = [
  {
    "id": 1,
    "name": 'Danniel',
    "lastname": 'Blichman',
    "mail": 'danniel.blichman@testtask.com',
    "role": 'admin',
    "status": true
  },
  {
    "id": 2,
    "name": 'Margarette',
    "lastname": ' Jones',
    "mail": 'margarette.jones@testtask.com',
    "role": 'User',
    "status": false
  },
  {
    "id": 3,
    "name": 'Bethany',
    "lastname": 'Doe',
    "mail": 'bethany.doe@testtask.com',
    "role": 'admin',
    "status": false
  }
] 

export default App;
