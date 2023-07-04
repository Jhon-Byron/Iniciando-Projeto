import { useState } from 'react'

import Title from '../src/components/title/Title'
import Button from '../src/components/button/button'
import Input from '../src/components/input/input'

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const HandleLabelClick = () => {
    console.log('clicou aqui')
  }

  const HandleLabelSubmit = (event) => {
    event.preventDefault() ///a pagina nao sera atualizada
    console.log('click aqui submit form')
    console.log({ email, password })
  }

  const handleChangeInput = (event) => {
    setEmail(event.target.value)
  }

  const handleChangeInputPassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <>
      <Title onClick={HandleLabelClick}>Formulario de login</Title>
      <label onClick={HandleLabelClick}>voltar a pagina...</label>
      <form onSubmit={HandleLabelSubmit}>
        <Input type="text" placeholder="Escreva seu email" onChange={handleChangeInput} />
        <Input
          type="password"
          placeholder="Escreva sua senha"
          onChange={handleChangeInputPassword}
        />
        <p>O email digitado foi: {email}</p>
        <Button type="submit">Botão Dentro do form</Button>
      </form>
      <Button onClick={HandleLabelClick}>Botão Fora do Form</Button>
      <label>label text</label>
    </>
  )
}
