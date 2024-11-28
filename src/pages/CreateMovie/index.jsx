import { Container, Content } from "./styles";

import { Header } from '../../components/Header'
import { ButtonText} from '../../components/ButtonText'
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from "../../components/Input";
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { CreateTag } from '../../components/CreateTag'
import { useState } from "react";
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";


export function CreateMovie () {
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')
  
  const navigate = useNavigate()

  const [ tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")
  
  function handleBack(){
    navigate(-1)
  }

  async function handleCreateMovie() {
    const ratingPoint = rating.replace(",", ".")

    if(!title){
      alert("Nome do filme está vazio.")
    }
    if(!ratingPoint){
      alert("A nota do filme está vazia.")
    }
    if(Number(ratingPoint)>5 || Number(ratingPoint)<0){
      alert("A nota do filme deve ser um número entre 0 e 5.")
    }

    await api.post('/notes', {
      title, 
      rating: ratingPoint, 
      description,
      tags
    })
    
    alert("Nota criada com sucesso!")
    handleBack()
  }

  function handleAddTag(){
    if(!newTag){
      alert("O novo marcador está vazio.")
      return
    }
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted){
    setTags( prevState => prevState.filter(tag => tag !== deleted))
  }
  
  

  return(
    <Container>
      <Header />
        
      <ButtonText onClick={handleBack} to='/' icon={ FiArrowLeft } title='Voltar' />
      
      <Content>
        <main>
          <h1> Novo filme</h1>
          
          <div>
            <Input placeholder='Título' onChange={e => setTitle(e.target.value) }/>
            <Input placeholder='Sua nota (de 0 a 5)' onChange={e => setRating(e.target.value)}/>
          </div>
          
          <Textarea placeholder='Observações' onChange={e => setDescription(e.target.value)}/>
        
          <h2>Marcadores</h2>

          <div className="create-tag">
            {
              tags.map((tag, index) => (
                <CreateTag 
                  key={String(index)}
                  value= {tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <CreateTag 
              placeholder='Novo marcador' 
              isNew 
              onChange= {e => setNewTag(e.target.value)} 
              value={newTag}
              onClick={handleAddTag}
            />
          </div>

          <div className="save-delete">
            <Button title='Salvar alterações' onClick= {handleCreateMovie}/>
          </div>
          
        </main>

      </Content>
    
    </Container>
  )
}