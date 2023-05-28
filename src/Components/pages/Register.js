import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from 'react-router-dom';
import { useCreateUserMutation } from '../../fetcher/userData/userSlice';
const Register = () => {
    const [userS, setUser] = useState({
        id : '',
        name : '',
        email : '',
        age : '',
        mobile : '',
        desc : ''
    })
    const {name, email, age, mobile, desc } = userS;
    const [addUser] = useCreateUserMutation()
    const Navigate = useNavigate()
    const handelInput = (e)=>{
        setUser({
            ...userS,
            id : uuidv4(),
            [e.target.name] : e.target.value
        })
    }

   
    const handelSubmit = (e)=>{
        e.preventDefault()
        addUser(userS)
        console.log(userS)
        Navigate('/')
    }   
   
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h3 className='my-4 p-3 text-center'>Register Here</h3>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-2'> </div>
            <div className='col-md-8'> 
               <form  onSubmit={handelSubmit}>
                <div className='row'>
                    <div className='col-md-6'>
                        <label htmlFor='name'>Name</label>
                        <input type="text" className='form-control' name="name"  placeholder='Enter Your Name' onChange={handelInput} value={name} />
                    </div>
                    <div className='col-md-6'>
                    <label htmlFor='email'>Email</label>
                        <input type="email" className='form-control' name="email"  placeholder='Enter Your Email' value={email} onChange={handelInput}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <label htmlFor='age'>Age</label>
                        <input type="number" className='form-control' name="age"  placeholder='Enter Your Age' value={age} onChange={handelInput}/>
                    </div>
                    <div className='col-md-6'>
                    <label htmlFor='mobile'>Mobile</label>
                        <input type="number" className='form-control' name="mobile"  placeholder='Enter Your Mobiile' value={mobile} onChange={handelInput}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <label htmlFor='desc'>Description</label>
                        <textarea type="text" className='form-control' name="desc"  placeholder='Enter Your Description' value={desc} onChange={handelInput}>
                        </textarea>
                    </div>
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
               </form>
            </div>
            <div className='col-md-2'> </div>
        </div>
    </div>
  )
}

export default Register
