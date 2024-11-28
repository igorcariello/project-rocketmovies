import { Container } from './styles'


export function Button({icon: Icon, title, to, ...rest}){
  return(
    <Container type="button" {...rest}>
      {Icon && <Icon size={16}/>} 
      {title}
    </Container>
  )
}