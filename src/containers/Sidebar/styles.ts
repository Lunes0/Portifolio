import styled from 'styled-components'
import { P } from '../../components/Paragraph/styles'

export const Desc = styled(P)`
  margin-bottom: 40px;
  margin-top: 24px;
`

export const ButtonTheme = styled.button`
  background: ${(props) => props.theme.corPrincipal};
  border-radius: 8px;
  color: ${(props) => props.theme.corFundo};
  font-weight: bold;
  cursor: pointer;
  font-size: 10px;
  padding: 8px;

  &:hover {
    opacity: 0.85;
  }
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
