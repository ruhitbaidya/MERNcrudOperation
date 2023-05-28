import React from 'react'
import {NavLink} from 'react-router-dom'
import { AiFillEye, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import {useGetAllUserQuery} from '../../fetcher/userData/userSlice';
import {useDeleteUserMutation} from "../../fetcher/userData/userSlice";
const Home = () => { 
    const [deletes] = useDeleteUserMutation();
    const {data, isFetching} = useGetAllUserQuery();
    console.log(data)
  return (
    <div className='container my-5'>
        <div className='row'>
            <div className='col-md-2'></div>
                <div className='col-md-8'>
                    <div className='card p-3'>
                        <div className='card-title'><h3>All user Short Info</h3></div>
                        <div className='card-body mt-'>
                            <div className='text-end'>
                                <NavLink to='/register'><button className='btn btn-primary my-2'>+ Create New User</button></NavLink>    
                            </div>
                            <div>
                            {
                                        isFetching ? (<p>Loading....</p>) : ( <table className='table text-center'>
                                        <thead className='bg-dark text-light'>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Age</th>
                                                <th>Mobile</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                {data.map((datas)=>{
                                                        const {id, name, email, mobile, age, desc} = datas
                                                       return <tr key={id}>
                                                           <td>{name}</td>
                                                           <td>{email}</td>
                                                           <td>{age}</td>
                                                           <td>{mobile}</td>
                                                           <td className='d-flex justify-content-between'>
                                                               <NavLink to="view" state={{id,name, email, age, mobile, desc}}><button className='btn btn-success'><AiFillEye /></button></NavLink>
                                                               <NavLink to="update" state={{id,name, email, age, mobile, desc}}><button className='btn btn-warning'><AiFillEdit /></button></NavLink>
                                                               <NavLink><button className='btn btn-danger' onClick={()=>{deletes(id)}}><AiFillDelete /></button></NavLink>
                                                           </td>
                                                       </tr>
                                                   })}
                                               </tbody>
                                        
                                    </table>)
                            }
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-2'></div>
            
        </div>
    </div>
  )
}

export default Home
