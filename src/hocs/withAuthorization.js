import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function withAuthorization(WrappedComponent) {
    return (props)=>{
        const{user}=useContext(UserContext)
        if(!user){
          return <Login/>
        }
        return{
          <WrappedComponent {...props}/>
        }

    }
 
}

export default withAuthorization