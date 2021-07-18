import React, {useState} from "react";
import './App.scss'
import Header from './components/Header';
import Table from './components/Table';

function App() {
  const [users, setUsers] = useState(sampleUsers)

  return (
    <div>
      <Header />
      <Table users={users} />
    </div>
      
  );
}

const sampleUsers = [
  {
    id: 1,
    name: 'Danniel Blichman',
    mail: 'danniel.blichman@testtask.com',
    role: 'admin',
    status: "true",
  },
  {
    id: 2,
    name: 'Margarette Jones',
    mail: 'margarette.jones@testtask.com',
    role: 'User',
    status: "true",
  },
  {
    id: 3,
    name: 'Bethany Doe',
    mail: 'bethany.doe@testtask.com',
    role: 'admin',
    status: "false",
  }
] 

export default App;
