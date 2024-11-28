import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

export function Header({ setSearch }){
  const { signOut, user } = useAuth()
  const navigate = useNavigate()
  const handleSearchChange = e => setSearch(e.target.value)

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : (avatarPlaceHolder)



  function handleHome(){
    navigate('/')
  }

  function handleLogout(){
    signOut()
    handleHome()
  }

  return (
    <Container>
      <a>
        <h1 onClick={handleHome}>MovieCapsule</h1>
      </a>
      <Input placeholder="Pesquisar pelo título" onChange={handleSearchChange}/>
      <Profile>
        <div>
          <p>{user.name}</p>
          <span onClick={handleLogout}>sair</span>
        </div>
        <Link to='/profile'>
          <img src={avatarUrl} alt="Imagem do usuário" />
        </Link>
      </Profile>
    </Container>
  )
}