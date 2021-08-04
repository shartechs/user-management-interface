import React, { useContext, useMemo, useState } from 'react'
import { UserContext } from '../App'
import User from './User'
import TableHeader from './TableHeader'

export default function Table() {
  const {searchValue, users} = useContext(UserContext)
  const [sorting, setSorting] = useState({field: "", order: ""})

  //defining table header values
  const headers = [
    {name: "User", field: "name", sortable: true},
    {name: "Role", field: "role", sortable: true},
    {name: "Status", field: "status", sortable: false},
    {name: "Actions", field: "actions", sortable: false},
  ]

  const usersData = useMemo(() => {
    let filteredUsers = users;

      //Filter users according to the search field input
      if(searchValue) {
        filteredUsers = filteredUsers.filter(user => 
          user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.mail.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.role.toLowerCase().includes(searchValue.toLowerCase())
      )
      }

      //Sorting users
      if(sorting.field) {
        const reversed = sorting.order === "asc" ? 1 : -1;
        filteredUsers = filteredUsers.sort((a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field]))
      }

    return filteredUsers;
  }, [users, searchValue, sorting])

    return (
        <div className="container">
          <div className="row">
            <div className="col-12">
            <table className="table">
              <TableHeader headers={headers} onSorting={ (field, order) => setSorting({field, order})}/>
              <tbody>

                {  
                  usersData.map(user => {
                  return (
                      <User 
                      key={user.id} 
                      user={user}
                      />
                  )
                })}

              </tbody>
            </table>
            </div>
          </div>

        </div>
    )
}
