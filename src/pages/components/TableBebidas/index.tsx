import { useContext } from "react"
import { HomeContext, IBebida } from "../../../context/HomeContext"
import { Table, Td, Th } from "./styles"

export default function TableBebidas() {
  const { bebidas } = useContext(HomeContext)
  return (
    <Table>
      <thead>
        <tr>
          <Th>Nome</Th>
          <Th>Marca</Th>
        </tr>
        {
          bebidas ? bebidas.map((bebida: IBebida, idx: number) => (
            <tr key={idx}>
              <Td>{bebida.nome}</Td>
              <Td>{bebida.marca}</Td>
            </tr>
          )) : null
        }
      </thead>
    </Table >
  )

}
