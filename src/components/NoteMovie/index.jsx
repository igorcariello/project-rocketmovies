import { Tag } from '../Tag'
import { Container } from './styles'

import { BiSolidStar, BiSolidStarHalf, BiStar } from 'react-icons/bi'

export function NoteMovie({ data, ...rest}){
  const stars = data.rating



  function numberOfStars (){
    if(Number(stars) === 0){
      return <BiStar size={12} color='#FF859B' />
    }
    if(Number(stars)>0 && Number(stars)<1){
      return <BiSolidStarHalf size={12} color='#FF859B' />
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
  
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <div>
        {numberOfStars()}
      </div>
      <p>
        { data.description }
      </p>
      
      {
        data.tags &&
        <div>
          {
            data.tags.map(tag => <Tag key= {tag.id} title={tag.name} />)
          }  
        </div>
      } 
      
      
    </Container>
  )
}