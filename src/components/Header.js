import React from 'react'

export default function Header() {
    return (
        <div className="header--container">
            <div className="container">
                <div className="row header--heading">
                    <div className="col-12">
                        <h1>Project Access</h1>
                        <input type="search" placeholder="Type to filter the table" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
