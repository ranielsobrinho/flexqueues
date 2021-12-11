import React from 'react'
import { Layout,Button, Modal, message } from 'antd'
import { RocketOutlined, LogoutOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './index.css'
import QueueForm from '../QueueForm'


export default function HeaderComponent() {
  const { Header } = Layout
  const navigate = useNavigate()

  function logOut(){
    sessionStorage.removeItem('token')
    navigate('/')
  }

  function info(){
    Modal.info({
      title: 'Nova fila, clique em Ok para retornar',
      content: (
        <QueueForm />
      ),
      onOk(){
        message.info('Modal fechado.')
      },
      width: 700
    })
  }

  return (
    <div>
      <Header>
        <p className="headerTitle">FlexQueues<RocketOutlined /></p>
        <div>
          <Button type='primary' onClick={info}><PlusCircleOutlined />Nova fila</Button>
          <Button type='link' onClick={() => logOut()}>Sair<LogoutOutlined /></Button>
        </div>
      </Header>
    </div>
  )
}
