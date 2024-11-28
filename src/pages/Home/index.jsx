import { Header } from "../../components/Header";
import { Container, Title, Content } from './styles'
import { FiPlus } from 'react-icons/fi'
import { Button } from '../../components/Button'
import { NoteMovie } from "../../components/NoteMovie";
import { useEffect, useState } from "react";
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom";

export function Home(){
  const [notes, setNotes] = useState([])
  const [search, setSearch]= useState('')

  const navigate = useNavigate()

  function handleCreateMovie(){
    navigate('/createmovie')
  }

  function handleDetails(id){
    navigate(`/moviepreview/${id}`)
  }

  useEffect(()=> {
    async function getNotes(){
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)  
    }
    
    getNotes()
  },[search])


  return (
    <Container>
      <Header setSearch={setSearch}/>
      <Content>
        <Title>
          <h1>Meus Filmes</h1>
          <Button to='/createmovie' onClick={handleCreateMovie} icon={ FiPlus } title='Adicionar filme'/>
        </Title>
        <main>
          {
            notes && notes.map( note => (
              
              <NoteMovie 
                key= {String(note.id)}
                data= {note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </main>

      </Content>
    </Container>
  )
}