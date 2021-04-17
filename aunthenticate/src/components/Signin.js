import React, {useRef} from 'react'
import {auth} from '../firebase';
import './Signin.css'
const Signin = () =>{
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value, 
            passwordRef.current.value
        ).then(user=>{
            console.log(user)
        }).catch(err=>{
            console.log(err)
        })
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword
        (
            emailRef.current.value, 
            passwordRef.current.value
        ).then(user=>{
            console.log(user)
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="signin">
            <form action="">
                <h1>Sign in</h1>
                <input ref={emailRef} type ="email"/>
                <input ref ={passwordRef}type="password"/>
                <button onClick = {signIn}> Sign in</button>
                <h5> Not yet registered? <span onClick={signUp} className="signup_link">Sign up</span></h5>
            </form>
        </div>
    )
}

export default Signin
