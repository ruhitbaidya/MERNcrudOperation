import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {useUpdateUserMutation} from "../../fetcher/userData/userSlice"
const UpdateF = () => {
    const location = useLocation()
    const [user, setUser] = useState({
        id : location.state.id,
        name : location.state.name,
        email : location.state.email,
        age : location.state.age,
        mobile : location.state.mobile,
        desc : location.state.desc
    })
    const navigate = useNavigate()
    
    const {id, name, email, age, mobile, desc } = user;

    const handelInput = (e)=>{
        setUser({
            ...user,
            id : id,
            [e.target.name] : e.target.value
        })
    }

    const [updateFind, messages] = useUpdateUserMutation(user)
    console.log(messages)
    const handelSubmit = (e)=>{
        e.preventDefault()
        updateFind(user)
        navigate('/')
    }  
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-12'>
            <h3 className='my-4 p-3 text-center'>Update User Here</h3>
            {/* <p>{messages ? ("Data Update Succefully") : ("plz wait")}</p> */}
        </div>
    </div>
    <div className='row'>
        <div className='col-md-2'> </div>
        <div className='col-md-8'> 
           <form method="" action="POST" onSubmit={handelSubmit}>
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
                <button className="btn btn-primary" type="submit">Update</button>
            </div>
           </form>
        </div>
        <div className='col-md-2'> </div>
    </div>
</div>
  )
}

export default UpdateF
