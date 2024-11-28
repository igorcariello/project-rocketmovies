import { Container, Form, Image } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiCamera } from 'react-icons/fi'

import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { api } from '../../services/api'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

export function Profile(){
  const { user, updatedProfile } = useAuth()
  
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : (avatarPlaceHolder)
  const [ avatar, setAvatar ] = useState(avatarUrl) 
  const [ avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate() 

  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  async function handleUpdated(){
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    const userUpdated = Object.assign(user, updated)

    await updatedProfile({ user:userUpdated, avatarFile})
  }

  function handleBack(){
    navigate(-1)
  }
  return(
    <Container>
      <header>

        <ButtonText to='/' icon={ FiArrowLeft } title='Voltar' onClick={handleBack}/>
      
      </header>
      <Form>
        <Image>
          <img src={avatar} alt="Imagem do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input 
              type="file" 
              onChange={handleChangeAvatar} 
              id='avatar' 
            />
          </label>
        </Image>

        <Input 
          icon= { FiUser }
          type='text' 
          placeholder= 'Nome'
          value={name}
          onChange = { e => setName(e.target.value)}
        />

        <Input 
          icon= { FiMail }
          type='text' 
          placeholder='E-mail'
          value={email}
          onChange = { e => setEmail(e.target.value)}
        />

        <Input 
          icon= { FiUser }
          type='password' 
          placeholder='Senha atual'
          onChange = { e => setOldPassword(e.target.value)}
        />

        <Input 
          icon= { FiUser }
          type='password' 
          placeholder='Nova senha'
          onChange = { e => setNewPassword(e.target.value)}
        />

        <Button title='Salvar' onClick={handleUpdated} />

      </Form>
    </Container>
  )
}