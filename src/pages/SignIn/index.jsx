import { Background, Container, Form } from "./styles";
import { Input } from '../../components/Input'
import { FiLock, FiMail} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";


export function SignIn(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()  
  
  const { signIn } = useAuth()

  function handleSignIn (){
    signIn({email, password})
  }

  function handleGoSignUp(){
    navigate("/signup")
  }

  function handleKeyPress(event){
    if(event.key === 'Enter') {
      handleSignIn(event)
    }
  }


  
  
  return (
    <Container>
      <Form>
        <h1>MovieCapsule</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <Input 
        placeholder='E-mail'
        icon={ FiMail }
        type="email"
        onChange= {e => setEmail(e.target.value)}
        onKeyPress= {handleKeyPress}
        />

        <Input 
        placeholder='Senha'
        type="password"
        icon={ FiLock }
        onChange= {e => setPassword(e.target.value)}
        onKeyPress= {handleKeyPress}
        />

        <Button title= "Entrar" onClick= {handleSignIn}/>

        <ButtonText title='Criar conta' onClick= {handleGoSignUp} />
        
      </Form>
      <Background />
    </Container>
  )
}