import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {

    const {x} = useParams();
    let nav = useNavigate();

    const [user, SetUser] = useState(
        {
            "name": "",
            "username": "",
            "email": ""
        }
    )

    const reg = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${x}`, user);
        nav("/");
    }

    const setSetUser= async ()=>
    {
        const temp = await axios.get(`http://localhost:8080/user/${x}`);
        console.log(temp.data);
        SetUser(temp.data);
    }

    useEffect(()=>
    {
        setSetUser();
    },[]);

    const onInputCh = (e) => {
        SetUser({ ...user, [e.target.name]: e.target.value });
    }


    return (
        <div className="container mt-5">
            <h2>Edit User</h2>
            <form onSubmit={(e) => reg(e)}
                style={{
                    border: '1px solid #ccc',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    padding: '20px',
                    borderRadius: '8px',
                    maxWidth: '400px',
                    margin: 'auto'
                }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={(e) => onInputCh(e)} name="name" value={user.name} />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter your username" onChange={(e) => onInputCh(e)} name="username" value={user.username} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={(e) => onInputCh(e)} name="email" value={user.email} />
                </div>
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary me-2">Submit</button>
                    <Link to="/" type="button" className="btn btn-secondary">Cancel</Link>
                </div>
            </form>
        </div>
    );
};

export default EditUser;
