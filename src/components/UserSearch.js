import React, { useContext } from 'react'
import { UserContext } from '../App'

export default function UserSearch() {
    const {searchValue, setSearchValue} = useContext(UserContext)

    return (

            <input
                type="search" 
                placeholder="Type to filter the table" 
                value={searchValue}
                onChange={(e) => {
                    setSearchValue(e.target.value)
                }}
            />

    )
}
