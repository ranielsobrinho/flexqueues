import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'antd'
import Api from '../../service/Api'

export default function RegisterForm() {
    const {register, handleSubmit} = useForm()

    const submit = data => {
        console.log(data);
        Api.post('/api/users', data)
        .then((res) => {
            console.log(res)
        }).catch((err) => console.log(err))
    }
    return (
        <div>
            <h2>Registrar</h2>
            <form onSubmit={handleSubmit(submit)}>

                    <input type="text" name="nome" {...register("nome")} placeholder='Nome'/>

                    <input type="text" name="username" {...register("username")} placeholder='Username'/>

                    <input type="text" name="CPF" {...register("CPF")} placeholder='CPF'/>

                    <input type="text" name="email" {...register("email")} placeholder='Email'/>

                    <input type="text" name="codigo_agente" {...register("codigo_agente")} placeholder='Código de agente'/>

                <Button type="primary" htmlType='submit'>Enviar</Button>
            </form>
        </div>
    )
}
