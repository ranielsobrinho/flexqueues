import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import Api from '../../service/Api'
import './index.css'

export default function SignForm() {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    const submit = data => {
        console.log(data);
        Api.post('/api/auth', data)
        .then((res) => {
            sessionStorage.setItem('token', res.data.data)
            navigate("/queues")
        }).catch((err) => console.log(err))
    }
    return (
        <div className="form">
            <h2>Entrar</h2>
            <form onSubmit={handleSubmit(submit)}>
                    <input type="text" name="username" {...register("username")} placeholder='Username'/>
                    
                    <input type="text" name="codigo_agente" {...register("codigo_agente")} placeholder='Código de agente'/>
                <Button type="primary" htmlType='submit'>Enviar</Button>
            </form>
        </div>
    )
}
