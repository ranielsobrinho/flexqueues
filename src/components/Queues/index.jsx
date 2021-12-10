import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Table } from 'antd'
import { EditOutlined } from '@ant-design/icons'
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

  const columns = [
    {
      title: 'Edit/Delete',
      dataIndex: 'id',
      render: id => (
        <>
          <Button onClick={() => redirect(id)} type='link'><EditOutlined /></Button>
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
