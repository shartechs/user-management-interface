import React, { useContext } from 'react'
import { UserContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UserSearch() {
    const {searchValue, setSearchValue} = useContext(UserContext)

    return (
            <div className="d-flex">
            <input
                type="search" 
                placeholder="Type to filter the table" 
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                }}
            />
            <FontAwesomeIcon icon="search"/>
            </div>


    )
}
