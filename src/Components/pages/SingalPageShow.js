import React from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';

const SingalPageShow = () => {
    const location = useLocation();
    const {id, name, email, age, mobile, desc} = location.state;
  
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <div className='card p-3'>
                    <div className='card-title'>
                        <h3>User Whole Details</h3>
                    </div>
                    <div className='catd-body p-3'>
                        <div className='text-end'>
                           <NavLink to="update" state={{id, name, email, age, mobile, desc}}><button className='btn btn-warning m-2'><AiFillEdit /></button></NavLink> 
                        </div>
                        <div>
                            <div className='row mt-3'>
                            <div className='col-md-6'>
                               <p>Name : {location.state.name}</p> 
                               <p>Email : {location.state.email} </p> 
                               <p>Age : {location.state.age} </p> 
                            </div>
                            <div className='col-md-6'>
                            <p>Mobile : {location.state.mobile}</p> 
                               <p>Desc : {location.state.desc}</p> 
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-2'></div>
        </div>
    </div>
  )
}

export default SingalPageShow
