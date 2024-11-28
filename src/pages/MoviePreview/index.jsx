import { FiArrowLeft, FiClock} from "react-icons/fi";
import { BiSolidStar, BiSolidStarHalf, BiStar } from "react-icons/bi";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Container, Content } from "./styles";
import { Tag } from '../../components/Tag'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth";
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

export function MoviePreview(){
  const { user } = useAuth()
  const [data, setData] = useState()
  const params = useParams()
  const stars = data ? Number(data.rating) : 0

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : (avatarPlaceHolder)
  const navigate = useNavigate()

  function numberOfStars (){
    if(Number(stars) === 0){
      return <BiStar size={12} color='#FF859B' />
    }
    if(Number(stars)>0 && Number(stars)<1){
      return <BiSolidStarHalf size={12} color='#FF859b' />
    }
    if(Number(stars) === 1){
      return (
        <BiSolidStar size={12} color='#FF859B' />
    )}
    if(Number(stars)>1 && Number(stars)<2){
      return (
      <>
        <BiSolidStar size={12} color='#FF859B' />
        <BiSolidStarHalf size={12} color='#FF859B' />
      </>
    )}
    if(Number(stars) === 2){
      return (
        <>
          <BiSolidStar size={12} color='#FF859B' />
          <BiSolidStar size={12} color='#FF859B' />
        </>
    )}    
    if(Number(stars)>2 && Number(stars)<3){
      return (
      <>
        <BiSolidStar size={12} color='#FF859B' />
        <BiSolidStar size={12} color='#FF859B' />
        <BiSolidStarHalf size={12} color='#FF859B' />
      </>
    )}
    if(Number(stars) === 3){
      return (
        <>
          <BiSolidStar size={12} color='#FF859B' />
          <BiSolidStar size={12} color='#FF859B' />
          <BiSolidStar size={12} color='#FF859B' />
        </>
    )}
    if(Number(stars)>3 && Number(stars)<4){
      return (
      <>
        <BiSolidStar size={12} color='#FF859B' />
        <BiSolidStar size={12} color='#FF859B' />
        <BiSolidStar size={12} color='#FF859B' />
        <BiSolidStarHalf size={12} color='#FF859B' />
      </>
    )}
    if(Number(stars) === 4){
      return (
        <>
          <BiSolidStar size={12} color='#FF859B' />
          <BiSolidStar size={12} color='#FF859B' />
          <BiSolidStar size={12} color='#FF859B' />
          <BiSolidStar size={12} color='#FF859B' />
        </>
    )}
    if(Number(stars)>4 && Number(stars)<5){
      return (
      <>
        <BiSolidStar size={12} color='#FF859B' />
        <BiSolidStar size={12} color='#FF859B' />
        <BiSolidStar size={12} color='#FF859B' />
        <BiSolidStar size={12} color='#FF859B' />
        <BiSolidStarHalf size={12} color='#FF859B' />
      </>
    )}
    if(Number(stars) === 5){
      return (
        <>
          <BiSolidStar size={12} color='#FF859B' />
          <BiSolidStar size={12} color='#FF859B' />
          <BiSolidStar size={12} color='#FF859B' />
          <BiSolidStar size={12} color='#FF859B' />
          <BiSolidStar size={12} color='#FF859B' />
        </>
    )}
  }
  

  function handleBack(){
    navigate(-1)
  }

  async function handleRemoveMovie(){
    const confirm = window.confirm("Deseja realmente excluir esse filme?")

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      handleBack()
    }

  }
  


  useEffect(() => {
    async function fetchNote(){
      try {
        const response = await api.get(`/notes/${params.id}`)
        setData(response.data)
      }catch (error){
        console.error("Error fetching note:", error)
      }
    }

    if(params.id){
      fetchNote()
    }
  },[params.id])


  return (
    <Container>
      <Header />
      <ButtonText onClick={handleBack} icon= {FiArrowLeft} title= 'Voltar'/>
      <Content>
        
        {
          data &&
          <div>
            <h1>{data.title}</h1>
            <div className="stars-note">
              { numberOfStars()}
            </div>
          </div>
        }
        
        {
          data &&
          <div>
            <img src={avatarUrl} alt="Imagem do usuário" />
            <h2>Por {user.name} </h2> <FiClock /> <h2>{data.created_at}</h2>
          </div>
        }

        {
          data && data.tags &&
          <div>
            {
              data.tags.map((tag) => (
                <Tag 
                  key={String(tag.id)}                  
                  title={tag.name}
                />
              ))
            }
          </div>
        }  
       
        {
          data &&
          <p>
            {data.description}
          </p>
        }
            
        <Button title='Excluir filme' onClick= { handleRemoveMovie }/>

      </Content>
    </Container>
  )
}