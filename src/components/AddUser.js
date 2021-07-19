import React, { useState, useContext } from 'react'
import { UserContext } from '../App'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

export default function AddUser() {
    const {show, handleClose, AddUser} = useContext(UserContext)
        const [name, setName] = useState('')
        const [lastname, setLastname] = useState('')
        const [mail, setMail] = useState('')
        const [role, setRole] = useState('User')
        const [status, setStatus] = useState(false)
        
        const onSubmit = (e) => {
            e.preventDefault()
        

            if(!name || !lastname) {
                alert('Please add name and last name')
                return
            }
        
            AddUser({name, lastname, mail, role, status})
        
            setName('')
            setLastname('')
            setMail('')
            setRole('User')

            // handleClose()
        }

    return (


        <div>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={onSubmit}>
            <div className="form-control">
                <input
                    type="text" 
                    placeholder="* First Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text" 
                    placeholder="* Last Name"
                    required 
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </div>
            <div className="form-control">
                <input
                    type="email" 
                    placeholder="* Last Name"
                    required
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
            </div>
            <div className="form-control">
                <select
                    value={role}
                    required
                    onChange={(e) => setRole(e.target.value)}>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
            </div>

            </form>


            <Button type="submit" className="add-user--btn-submit">
                Send Invitation
            </Button>
        
        </Modal.Body>

      </Modal>
        </div>
    )
}
