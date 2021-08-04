import React from 'react';
import {Link} from 'react-router-dom'


export default function AddUserBtn() {


    return (
        <Link to="/">
            <button className="btn btn-primary header--btn-add-user">Home</button>
        </Link>


    )
}