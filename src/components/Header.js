import React from 'react'
import AddUser from './AddUser';

export default function Header({title, button, searchBox}) {

    return (
        <div className="header--container">
            <div className="container">
                <div className="row header--heading">
                    <div className="col-12">
                        <h1>{title}</h1>
                        {searchBox}
                    </div>
                </div>
                {button}
                <AddUser />
            </div>
            
        </div>
    )
}
