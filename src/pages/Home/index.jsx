import React, { useState } from 'react'
import './index.css'
import { Button } from 'antd'
import SignForm from '../../components/SignForm'
import RegisterForm from '../../components/RegisterForm'

export default function Home() {
    const [ login, setLogin ] = useState(true)

    function toggleLogin(){
        setLogin(!login)
    }
    return(
        <div className='container'>
            { login ? <SignForm /> : <RegisterForm /> }

            <p>Não tem conta?</p>
            <Button type='link' onClick={() => {toggleLogin()}}>Registre-se aqui</Button>
        </div>
    ) 
}