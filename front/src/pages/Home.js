import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const Home = () => {

const[users,setUsers] =useState([]);

useEffect(()=>{
    console.log("hahaha");
    loadUsers();
},[]);

const {x} = useParams();

const loadUsers = async ()=>
{
    const users = await axios.get("http://localhost:8080/users");
    setUsers(users.data);
}

    const deleteU = async (x)=>
    {
        const result = await axios.delete(`http://localhost:8080/user/${x}`);
        console.log(result)
        loadUsers();
    }



  return (
    <div className='container'>
      <div className='py-4'>
              <table className="table border shadow" >
                  <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">User Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Action</th>
                      </tr>
                  </thead>
                  <tbody>
{
    users.map((u,index)=>
    (
        <tr>
            <th scope="row"key={index}>{index+1}</th>
            <td>{u.name}</td>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>
                <button className='btn btn-primary mx-2'>View</button>
                <Link to={`/edituser/${u.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                <button onClick={()=>deleteU(u.id)} className='btn btn-danger mx-2'>Delete</button>
            </td>
        </tr>
    ))
}


                      
                      
                  </tbody>
              </table>
      </div>
    </div>
  )
}

export default Home
