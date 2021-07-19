import React, { useContext } from 'react'
import { UserContext } from '../App'

export default function User({user}) {
    const {toggleStatus} = useContext(UserContext)
    const {deleteUser} = useContext(UserContext)

    return (
        <tr>
        <td>
            <div className="user--name-block">
            <p>{user.name}</p>
            <p className="lastname">{user.lastname}</p>
            </div>

            <span>{user.mail}</span>
        </td>
        <td>{user.role}</td>
        <td>
            <button 
            className={`user--status ${user.status ? 'true' : 'false'}`}
            onClick={() => toggleStatus(user.id)}>
                {user.status}
            </button>
        </td>
        <td>
            <button className='btn btn-primary user--btn-settings'>1</button>
            <button 
            className='btn user--btn-danger'
            onClick={() => deleteUser(user.id)}>
                <img src="../assets/delete-icon.svg" alt="delete-icon" />
            </button>
        </td>
      </tr>

    )
}
