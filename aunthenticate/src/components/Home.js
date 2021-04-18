import React from 'react'
import {auth} from '../firebase'
import {Form, Button, Card} from "react-bootstrap"
function Home() {
    return (
        <div>
           <h1> Welcome Home</h1>
           <p><Button class="btn btn-warning" onClick={()=>auth.signOut()}>Sign out</Button></p>
        </div>
    )
}

export default Home
