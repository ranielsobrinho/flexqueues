import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'antd'
import Api from '../../service/Api'
import './index.css'

export default function EditQueue() {
  const { id } = useParams()
  const { register } = useForm()
  const navigate = useNavigate()
  //const [ editted, setEditted ] = useState([])

  useEffect(() => {
    Api.get(`/api/queues/${id}`)
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.error(err))
  })

  function redirect(){
    navigate('/queues')
  }

  return (
    <div className="edit-container">
      <form className="edit-form">
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
