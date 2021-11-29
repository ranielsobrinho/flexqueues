import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'antd'
import Api from '../../service/Api'

export default function SignForm() {
    const {register, handleSubmit} = useForm()

    const submit = data => {
        console.log(data);
        Api.post('/api/auth', data)
        .then((res) => {
            sessionStorage.setItem('token', res.data.data)
        }).catch((err) => console.log(err))
    }
    return (
        <div>
            <h2>Sign in form</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input type="text" name="username" {...register("username")}/>
                </div>

                <div>
                    <label htmlFor='codigo_agente'>Código do agente:</label>
                    <input type="text" name="codigo_agente" {...register("codigo_agente")}/>
                </div>

                <Button type="primary" htmlType='submit'>Enviar</Button>
            </form>
        </div>
    )
}
