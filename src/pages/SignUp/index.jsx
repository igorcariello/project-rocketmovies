import { Background, Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { FiLock, FiMail, FiUser, FiArrowLeft} from 'react-icons/fi'
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

import { api } from "../../services/api"


export function SignUp(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()
  
  function handleBackHome(){
    navigate('/')
  }

  function handleSignUp(){

    if(!name || !email || !password){
      return alert("Preencha todos os campos!")
    }

    api.post('/users', {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate(-1)
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert('Não foi possível realizar o cadastro.')
      }
    })
    
  }

  function handleKeyPress(event){
    if(event.key === 'Enter') {
      handleSignUp(event)
    }
  }


  return (
    <Container>
      <Form>
        <h1>MovieCapsule</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <Input 
        placeholder='Nome'
        icon={ FiUser }
        onChange= {e => setName(e.target.value)}
        onKeyPress={handleKeyPress}
        />
        
        <Input 
        placeholder='E-mail'
        icon={ FiMail }
        onChange= {e => setEmail(e.target.value)}
        onKeyPress={handleKeyPress}
        />

        <Input 
        placeholder='Senha'
        icon={ FiLock }
        type="password"
        onChange= {e => setPassword(e.target.value)}
        onKeyPress={handleKeyPress}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <ButtonText icon={ FiArrowLeft } title='Voltar para o login' onClick={handleBackHome}/>
    
      </Form>
      <Background />
    </Container>
  )
}