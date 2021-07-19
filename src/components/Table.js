import React, { useContext } from 'react'
import { UserContext } from '../App'
import User from './User'

export default function Table() {
  const {searchValue, users} = useContext(UserContext)
    return (
        <div className="container">
          <div className="row">
            <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"><span>User</span></th>
                  <th scope="col"><span>Role</span></th>
                  <th scope="col"><span>Status</span></th>
                  <th scope="col"><span>Actions</span></th>
                </tr>
              </thead>
              <tbody>

                {  
                users.filter(user => {
                  if (searchValue === "") {
                    return user;
                  } else if(
                    user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                    user.mail.toLowerCase().includes(searchValue.toLowerCase())
                  ) {
                    return user
                  }
                }).map(user => {
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
