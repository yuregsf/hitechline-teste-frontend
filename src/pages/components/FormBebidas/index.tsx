import { ChangeEvent, MouseEvent, useContext, useMemo, useState } from "react"
import { HomeContext, IBebida } from "../../../context/HomeContext"
import { Button, Container } from "../../Home/styles"
import { ErrorSpan, FormItem } from "./styles"

export default function FormBebidas() {
  const marcas = useMemo(() => [
    "Brasil",
    "França",
    "Japão",
    "Venezuela"
  ], [])
  const [nome, setNome] = useState('')
  const [marca, setMarca] = useState('Brasil')
  const [error, setError] = useState('')

  const { setBebidas, setModalVisible } = useContext(HomeContext)

  const salvarBebida = (e: MouseEvent) => {
    e.preventDefault()
    if (nome && marca) {
      setBebidas((bebidas: IBebida[]) => {
        const newBebida: IBebida = {
          nome,
          marca
        }
        return [...bebidas, newBebida]
      })
      setNome("")
      setMarca("Brasil")
      setError("")
      setModalVisible(false)
    }
    else {
      setError("Preencha todos os campos")
    }
  }

  const selectMarca = (e: ChangeEvent<HTMLSelectElement>) => {
    setMarca(e.target.value)
  }


  return (
    <Container>
      <form action="none">
        <FormItem>
          <label htmlFor="nome">Nome:&nbsp;</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => { setNome(e.target.value) }} />
        </FormItem>
        <FormItem>
          <label htmlFor="marca">Marca:&nbsp;</label>
          <select onChange={selectMarca} id="marca"
            value={marca}
          >
            {
              marcas ? marcas.map((item: string, key: number) => (
                <option key={key} value={item}>{item}</option>
              )) : null
            }
          </select>
        </FormItem>
        <FormItem>
          <Button
            onClick={salvarBebida}
          >Salvar</Button>
        </FormItem>
        {error ?
          <ErrorSpan>{error}</ErrorSpan>
          : null
        }
      </form>
    </Container>
  )
}
