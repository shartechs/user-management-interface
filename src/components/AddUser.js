import React, { useState, useContext } from 'react'
import { UserContext } from '../App'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export default function AddUser() {
    const {show, handleClose, addNewUser} = useContext(UserContext)
        const [name, setName] = useState('')
        const [lastname, setLastname] = useState('')
        const [mail, setMail] = useState('')
        const [role, setRole] = useState('')
        
        const onSubmit = (e) => {
            e.preventDefault()

            if(role!="Admin" && role!="User") {
                alert('Please choose a user role')
                return
            }

            addNewUser({name, lastname, mail, role})
        
            setName('')
            setLastname('')
            setMail('')
            setRole('')

            handleClose()
        }

    return (


        <div>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <h1>Invite New User</h1>
            <form onSubmit={onSubmit}>
            <div className="form-control">
                <input
                    type="text" 
                    className="name"
                    placeholder="* First Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text" 
                    className="last-name"
                    placeholder="* Last Name"
                    required 
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </div>
            <div className="form-control">
                <input
                    type="email" 
                    className="email"
                    placeholder="* Email"
                    required
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
            </div>
            <div className="form-control">
                <select
                    className="role"
                    value={role}
                    required
                    onChange={(e) => setRole(e.target.value)}>
                    <option value="* Role" defaultValue>* Role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
            </div>
            <div className="form-control">
                <Button type="submit" className="add-user--btn-submit">
                    Send Invitation
                </Button>
            </div>

            </form>



        
        </Modal.Body>

      </Modal>
        </div>
    )
}
