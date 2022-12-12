import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useCrud from './hooks/useCrud'

function App() {

const [closeForm, setCloseForm] = useState(true)  
  const {
    users, 
    getAllUsers, 
    creatNewUser, 
    deleteUserById, 
    updateUserById} = useCrud()
  const [updateInfo, setUpdateInfo] = useState()

  useEffect(() => {
    getAllUsers()
  }, [])

 

  return (
    <div className="App">
        <h1 className='App_title' >Users</h1>
        <button onClick={() => setCloseForm(false)} className='App_btn'>Open Form</button>
      <div className={`form_container ${closeForm && 'close_form'}`}>
      <FormUser
        creatNewUser={creatNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        setCloseForm={setCloseForm}
      />
      </div>
      <div className='user_container'>
       {
        users?.map(user => (
          <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setCloseForm={setCloseForm}
          />
        ))
       } 
      </div>
    </div>
  )
}

export default App
