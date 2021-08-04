import { useLocation, Link } from "react-router-dom";
import React, { useState, useContext, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { UserContext } from '../App'
import userPicture from '../assets/user-picture.svg'
import App from "../App";

export default function UserSetup() {


    const { state } = useLocation();
    const { changeUser } = useContext(UserContext)
        const [name, setName] = useState(state.users.name)
        const [lastname, setLastname] = useState(state.users.lastname)
        const [role, setRole] = useState(state.users.role)
        const [mail, setMail] = useState(state.users.mail)
        const [status, setStatus] = useState(state.users.status);
        const [permission1, setPermission1] = useState(state.users.permission1);
        const [permission2, setPermission2] = useState(state.users.permission2);

        useEffect(()=>{
            state.users.status = status
        }, [status]);

        useEffect(()=>{
            state.users.permission1 = permission1
        }, [permission1]);

        useEffect(()=>{
            state.users.permission2 = permission2
        }, [permission2]);
        

        const id = state.users.id

        const save = (e) => {
            e.preventDefault()

            changeUser({id, name, lastname, mail, role}, state.users.id)
    

        }

    return (
            <div className="container user-setup">
                <div className="row">

                    <div className="col-12 col-lg-4 user-setup--info">
                        <img src={userPicture} alt="" />
                        <div className="user-setup--info-box">
                            <p>{state.users.name}{" "}</p>
                            <p>{state.users.lastname}{" "}</p>
                            <span>{state.users.mail}{" "}</span>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 user-setup--form">
                    <h2>Details</h2>
                    <div className="form-control user-setup--status-box">
                        <span>Status</span>
                        <button 
                        className={`user--status ${status ? 'true' : 'false'}`}
                        onClick={() => setStatus(!status)}>
                            {status}
                        </button>
                        </div>
                    <form onSubmit={save}>

            <div className="form-control">
                <label htmlFor="">* First Name</label>
                <input
                    type="text" 
                    className="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-control">
            <label htmlFor="">* Last Name</label>
                <input
                    type="text" 
                    className="name"
                    required 
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="">* Email</label>
                <input
                    type="text" 
                    className="email"
                    required
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                />
            </div>

            <div className="form-control">
            <label htmlFor="">* Role</label>
                <select
                    className="role"
                    value={role}
                    required
                    onChange={(e) => setRole(e.target.value)}
                    >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>
            </div>
            <div className="form-control">
                <Button type="submit" className="add-user--btn-submit">
                    Save Changes
                </Button> 
            </div>
            </form>
            </div>
                    <div className="col-12 col-lg-4 user-setup--permissions">
                        <h2>Permissions</h2>
                    <hr />
                    <div className="user-setup--permision-box">
                        <span>Permission 1</span>
                        <button 
                        className={`user--status ${permission1 ? 'true' : 'false'}`}
                        onClick={() => setPermission1(!permission1)}>
                            {permission1}
                        </button>
                    </div>
                    <div className="user-setup--permision-box">
                        <span>Permission 2</span>
                        <button 
                        className={`user--status ${permission2 ? 'true' : 'false'}`}
                        onClick={() => setPermission2(!permission2)}>
                            {permission2}
                        </button>
                    </div>
                    </div>

                </div>
            </div>
    )
}
