import React from 'react'

export default function User({user}) {
    return (
        <tr>
        <td scope="row">
        <p>{user.name}</p>
            <span>{user.mail}</span>
        </td>
        <td>{user.role}</td>
        <td>{user.status}</td>
        <td>
            <button>1</button>
            <button>2</button>
        </td>
      </tr>

    )
}
