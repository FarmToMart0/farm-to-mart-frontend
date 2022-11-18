import React from 'react'
import NavBar from '../../components/navbar/index'
import SignUp from '../../components/signUp/Up/index'
import {signUpWithGoogle} from '../../firebase'


function SignUpFun() {

  return (
    <div>
        <NavBar/>
        <SignUp signupFun = {signUpWithGoogle}/>
    </div>
  )
}

export default SignUpFun