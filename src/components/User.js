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
            <Link to={`/user-setup/${user.id}`} className='user--btn-settings'>

            <svg width="15.934" height="17.15" fill="#c6c6c6" version="1.1" viewBox="0 0 24 24">
                <path d="M22.2,14.4L21,13.7c-1.3-0.8-1.3-2.7,0-3.5l1.2-0.7c1-0.6,1.3-1.8,0.7-2.7l-1-1.7c-0.6-1-1.8-1.3-2.7-0.7   L18,5.1c-1.3,0.8-3-0.2-3-1.7V2c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2v1.3c0,1.5-1.7,2.5-3,1.7L4.8,4.4c-1-0.6-2.2-0.2-2.7,0.7   l-1,1.7C0.6,7.8,0.9,9,1.8,9.6L3,10.3C4.3,11,4.3,13,3,13.7l-1.2,0.7c-1,0.6-1.3,1.8-0.7,2.7l1,1.7c0.6,1,1.8,1.3,2.7,0.7L6,18.9   c1.3-0.8,3,0.2,3,1.7V22c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-1.3c0-1.5,1.7-2.5,3-1.7l1.2,0.7c1,0.6,2.2,0.2,2.7-0.7l1-1.7   C23.4,16.2,23.1,15,22.2,14.4z M12,16c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C16,14.2,14.2,16,12,16z" id="settings"/>
                </svg>
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
