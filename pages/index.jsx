import Title from '../src/components/title/Title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {
  const HandleLabelClick = () => {
    console.log('clicou aqui')
  }

  return (
    <>
      <Title onClick={HandleLabelClick}>Formulario de login</Title>
      <label onClick={HandleLabelClick}>voltar a pagina...</label>
      <form>
        <Input type="email" placeholder="Escreva seu email" />
        <Input type="password" placeholder="Digite sua senha" />
        <Button onClick={HandleLabelClick}>Botao</Button>
      </form>
      <label>label text</label>
    </>
  )
}
