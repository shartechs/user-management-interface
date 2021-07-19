import React, { useContext } from 'react'
import { UserContext } from '../App'

export default function Header() {
    const {searchValue, setSearchValue} = useContext(UserContext)

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
            </div>
            
        </div>
    )
}
