import React from 'react'
import { Layout,Button } from 'antd'
import { RocketOutlined, LogoutOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './index.css'


export default function HeaderComponent() {
  const { Header } = Layout
  const navigate = useNavigate()

  function logOut(){
    sessionStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div>
      <Header>
        <p className="headerTitle">FlexQueues<RocketOutlined /></p>
        <Button type='link' onClick={() => logOut()}>Sair<LogoutOutlined /></Button>
      </Header>
    </div>
  )
}
