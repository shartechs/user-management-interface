import React, { useContext } from 'react'
import { UserContext } from '../App'
import AddUser from './AddUser';

export default function Header() {
    const {searchValue, setSearchValue, handleShow} = useContext(UserContext)

    return (
        <div className="header--container">
            <div className="container">
                <div className="row header--heading">
                    <div className="col-12">
                        <h1>Project Access</h1>
                        <input
                         type="search" 
                         placeholder="Type to filter the table" 
                         value={searchValue}
                         onChange={(e) => {
                             setSearchValue(e.target.value)
                         }}
                         />
                    </div>
                </div>
                <button className="btn btn-primary header--btn-add-user" onClick={handleShow}>+</button>
                <AddUser />
            </div>
            
        </div>
    )
}
