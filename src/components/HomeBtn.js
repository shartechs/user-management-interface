import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function AddUserBtn() {


    return (
        <Link to="/user-management-interface">
            <button className="btn btn-primary header--btn-add-user">
            <FontAwesomeIcon icon="home"/>
            </button>
        </Link>


    )
}