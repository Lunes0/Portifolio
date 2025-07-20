import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { ButtonTheme, Desc, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Lunes</Title>
      <Paragraph fontSize={16} tipo="secundario">
        Lunes0
      </Paragraph>
      <Desc tipo="principal" fontSize={12}>
        Desenvolvedor Front-end
      </Desc>
      <ButtonTheme onClick={props.trocaTema}>Trocar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
