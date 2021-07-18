import React, { useContext } from 'react'
import { UserContext } from '../App'

export default function User({user}) {
    const {toggleStatus} = useContext(UserContext)

    return (
        <tr>
        <td scope="row">
        <p>{user.name}</p>
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
            <button className='btn btn-primary'>1</button>
            <button className='btn btn-danger'>2</button>
        </td>
      </tr>

    )
}
