import styled from 'styled-components'

type BotaoProps = {
  principal?: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${props => (props.principal ? 'blue' : '#4CAF50')};
  font-size: ${props => props.fontSize || '16px'};
  color: white;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
const BotaoPerigo = styled(Botao)`
  background-color: red;

  span {
    text-decoration: underline;
  }
`

function Test() {
  return (
    <div>
      <h1>Oi</h1>
      <Botao as='a' principal>Ler</Botao>
      <Botao fontSize='14px'>Enviar</Botao>
      <BotaoPerigo><span>Excluir</span></BotaoPerigo>
    </div>
  )
}

export default Test
