import { Container } from './style'

export function Textarea({...rest}){
  return (
    <Container>
      <textarea {...rest} />
    </Container>
  )

}