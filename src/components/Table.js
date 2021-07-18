import React from 'react';
import User from './User'

export default function Table({users}) {
    return (
        <div className="container">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">User</th>
      <th scope="col">Role</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => {
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
    )
}
