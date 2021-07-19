import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
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
            <Link to="/user-setup" className='btn btn-primary user--btn-settings'>

            </Link>
            <button 
            className='btn user--btn-danger'
            onClick={() => deleteUser(user.id)}>
                <svg width="12.934" height="17.15" viewBox="0 0 12.934 17.15">
                    <path fill="#c6c6c6" />
                    <path d="M1.539,16.156a1.883,1.883,0,0,0,1.848,1.905h7.391a1.883,1.883,0,0,0,1.848-1.905V4.723H1.539ZM13.549,1.864H10.316L9.392.912H4.772l-.924.953H.615V3.77H13.549Z" transform="translate(-0.615 -0.912)"/>
                </svg>
            </button>
        </td>
      </tr>

    )
}
