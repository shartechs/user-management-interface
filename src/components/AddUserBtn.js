import React, { useContext } from 'react'
import { UserContext } from '../App'

export default function AddUserBtn() {

    const { handleShow } = useContext(UserContext)
    return (

            <button className="btn btn-primary header--btn-add-user" onClick={handleShow}>+</button>

    )
}
