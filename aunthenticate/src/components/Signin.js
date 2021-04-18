import React, {useRef} from 'react'
import {auth} from '../firebase';
/* import './Signin.css' */
import {Form, Button, Card} from "react-bootstrap"
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
        <>
        <Card>
              <Card.Body>
        {/* <div className="signin"> */}
           {/*  <form action=""> */}
                <h2 className="text-center mb-4">Sign in</h2>
                <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} />
                {/* <input ref={emailRef} type ="email"/> */}
                    <Form.Label>Password</Form.Label>
                    {/* <input ref ={passwordRef}type="password"/> */}
                    <Form.Control type="password" ref ={passwordRef}/>
                </Form.Group>
                <Button className="w-100" onClick = {signIn}> Sign in</Button>
                <div className="w-100 text-center mt-2">
                 Not yet registered? <span onClick={signUp} >Sign up</span>
                </div>
            {/* </form> */}
        {/* </div> */}
        </Form>
        </Card.Body>
        </Card>
        </>
    )
}

export default Signin
