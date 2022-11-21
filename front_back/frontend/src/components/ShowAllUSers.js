import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import 'bootstrap/dist/css/bootstrap.min.css';
import { PencilSquare, Trash3Fill, PlusCircle,ArrowClockwise } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'



function ShowAllUsers() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    const response = await axios.get(process.env.REACT_APP_BASE_URL+'users')
    setUsers(response.data)
    console.log(response.data)
  }



  const Handledelete = (e) => {

    confirmAlert({
      title: 'DELETE USER',
      message: 'Are you sure you want to permanently delete this user.',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            await axios.delete("http://localhost:5000/api/users/" + e.target.title);
            setUsers(users.filter(user => user.id !== parseInt(e.target.title)));
          }
        },
        {
          label: 'Cancel delete'
        }
      ]
    });
  }



  return (

    <div className="App container mt-1 col-md-12 col-sm-12 justify-content-center">
      <div className="table-responsive-sm">
        <h5 className='text-primary mt-5 mr-5' ><u className="mb-5">ALL USERS LIST</u><br></br><br></br> <span><Link to={'/createuser'} ><button className="btn btn-sm ml-5 btn-success ">ADD USER <PlusCircle /></button></Link> <button onClick={getAllUsers} className="btn btn-sm ml-5 btn-info ">Refresh List <ArrowClockwise /></button></span></h5>
        <table className="table table-responsive col-md-12 table-striped table-bordered  table-hover table-sm">
          <thead className="bg-primary">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{
            users.map((user) => (

              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td><Link to={"/updateuser"} state={{ userid: user.id, username: user.username, email: user.email }} className="btn btn-sm btn-primary">Edit <PencilSquare /> </Link>   <button onClick={Handledelete} title={user.id} className="btn btn-sm btn-danger">Delete <Trash3Fill /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowAllUsers;
