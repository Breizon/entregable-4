import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'

const FormUser = ({creatNewUser, updateInfo, updateUserById, setUpdateInfo, setCloseForm}) => {

  console.log(updateInfo)
  
  useEffect(() => {
    reset(updateInfo)
  }, [updateInfo])
  
  const {register, reset, handleSubmit} = useForm()

  const submit = data => {
    if (updateInfo) {
        //Update
        updateUserById(updateInfo.id, data)
        setUpdateInfo()
    } else {
        //Create
        creatNewUser(data)
    }
    setCloseForm(true)
    reset({
        email:'',
        first_name:'',
        last_name:'',
        birthday:'',
        password:''
    })
  }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <div onClick={() => setCloseForm(true)} className='form_x'>x</div>
        <h2 className='form_title'>{updateInfo ? 'Update User' : 'Create User'}</h2>
        <div className='form_div' >   
            <label className='form_label' htmlFor="email">Email</label>
            <input className='form_input' type="email" id='email' {...register('email')}/>
        </div>
        <div className='form_div' >   
            <label className='form_label' htmlFor="password">Password</label>
            <input className='form_input' type="password" id='password'{...register('password')} />
        </div>
        <div className='form_div' >   
            <label className='form_label' htmlFor="first_name">First Name</label>
            <input className='form_input' type="text" id='first_name' {...register('first_name')}/>
        </div>
        <div className='form_div' >   
            <label className='form_label' htmlFor="last_name">Last Name</label>
            <input className='form_input' type="text" id='last_name' {...register('last_name')}/>
        </div>
        <div className='form_div' >   
            <label className='form_label' htmlFor="birthday">Birthday</label>
            <input className='form_input' type="date" id='birthday' {...register('birthday')}/>
        </div>
        <button className='form_btn'>Submit</button>
    </form>
  )
}

export default FormUser