import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function UseEffectPage() {
  const [userList, setUserList] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('Componente inicializado')
  }, [])

  useEffect(() => {
    async function buscarData() {
      //solicitar
      const request = await fetch('https://jsonplaceholder.typicode.com/users')
      //const request = await axios.get('') e equivalente
      const data = await request.json()
      setUserList(data)
    }

    buscarData()

    return function saveData() {
      console.log('save data')
    }
  }, [])

  useEffect(() => {
    const wheelListener = () => {
      console.log('wheel listener')
    }

    addEventListener('wheel', wheelListener)

    return () => {
      removeEventListener('wheel', wheelListener)
    }
  }, [])

  useEffect(() => {
    console.log('LISTA MODIFICADA')
  }, [userList])

  const handleForm = (event) => {
    event.preventDefault()
    setUserList([
      ...userList,
      {
        name
      }
    ])
    setName('')
  }

  return (
    <div>
      {userList.map((user, key) => (
        <div key={`user-${key}`}>{user.name}</div>
      ))}
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>
      <div>
        <Link href="/">Salvar Alterações</Link>
      </div>
    </div>
  )
}
