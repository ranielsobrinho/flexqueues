import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, message } from 'antd'
import Api from '../../service/Api'
import './index.css'

export default function EditQueue() {
  const { id } = useParams()
  const { register, reset, handleSubmit } = useForm()
  const navigate = useNavigate()
  const [ editted, setEditted ] = useState([])

  useEffect(() => {
    Api.get(`/api/queues/${id}`)
      .then(({data}) => {
        setEditted(data.data)
      })
      .catch(err => message.error(err))
  }, [id])

  useEffect(() => {
    reset({
      name: editted.name,
      timeout: editted.timeout
    })
  }, [reset, editted])

  const submit = data => {
    Api.put(`/api/queues/${id}`, data)
      .then((res) => {
        message.info('Atualizado com sucesso.')
        navigate('/queues')
      })
      .catch(err => message.error('Houve algum erro.'))
  }

  function redirect(){
    navigate('/queues')
  }

  return (
    <div className="edit-container">
      <form className="edit-form" onSubmit={handleSubmit(submit)}>
        <h2>Editar</h2>
        <input {...register('name', {required: true})}/>
        <input {...register('timeout', {required: true})}/>
        <div className='edit-buttons'>
          <Button htmlType='submit' type='primary'>Editar</Button>
          <Button onClick={() => redirect()} type='link'>Cancelar</Button>
        </div>
      </form>
    </div>
  )
}
