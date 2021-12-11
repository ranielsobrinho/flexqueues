import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, message, Table } from 'antd'
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons'
import Api from '../../service/Api'
import './index.css'

export default function Queues() {
  const [queues, setQueues] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    function getQueues(){
      Api.get('/api/queues')
        .then(({data}) => {
          setQueues(
            data.data.map(row => ({
              id: row.id,
              name: row.name,
              timeout: row.timeout,
              user: row.userId.username
            }))
          )
          console.log(queues)
        })
        .catch(err => console.log(err))
    }

    getQueues()
	}, [queues])

  function redirect(id){
    navigate(`/config/${id}`)
  }

  function deleteQueue(id){
    Api.delete(`/api/queues/${id}`)
      .then((res) => {
        message.info('Deletado com sucesso.')
      })
      .catch(error => message.error('Houve algo de errado.'))
  }

  const columns = [
    {
      title: 'Edit/Delete',
      dataIndex: 'id',
      render: id => (
        <>
          <Button onClick={() => redirect(id)} type='link'><EditOutlined /></Button>
          <Button onClick={() => deleteQueue(id)} type='link'><CloseCircleOutlined /></Button>
        </>
      )
    }, 
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Timeout',
      dataIndex: 'timeout'
    },
    {
      title: 'User',
      dataIndex: 'user'
    }
  ]

  return (
    <div>
      <Table columns={columns} dataSource={queues} />
    </div>
  )
}
