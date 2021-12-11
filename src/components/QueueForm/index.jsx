import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'antd'
import Api from '../../service/Api'
import './index.css'

export default function QueueForm() {
  const { register, handleSubmit } = useForm()

  const submit = data => {
    Api.post('/api/queues', {
      name: data.name,
      timeout: data.timeout,
      userId: sessionStorage.getItem('userId')
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <form className="queue-form" onSubmit={handleSubmit(submit)}>
        <input type="text" {...register('name', {required: true})} placeholder='Nome da fila'/>
        <input type="text" {...register('timeout', {required: true})} placeholder='Tempo limite'/>
        <Button htmlType='submit'>Enviar dados</Button>
      </form>
    </div>
  )
}
