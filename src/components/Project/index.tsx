import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragraph tipo="secundario">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem natus
      architecto eius veritatis nemo impedit, rem perspiciatis!
    </Paragraph>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
