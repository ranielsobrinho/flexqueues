import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import Api from '../../service/Api'
import './index.css'

export default function Queues() {
  const [queues, setQueues] = useState([])

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

  const columns = [
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
      <Table columns={columns} dataSource={queues} pagination={{ pageSize: 50 }} scroll={{ y: 240 }}/>
    </div>
  )
}
