import { useState } from 'react';
import { HomeContext, IBebida } from '../../context/HomeContext';
import FormBebidas from './components/FormBebidas';
import Modal from './components/Modal';
import TableBebidas from './components/TableBebidas';
import { Container, Button, Item } from './styles';

export const Home = (): JSX.Element => {
  const [bebidas, setBebidas] = useState<IBebida[]>([])

  const [modalVisible, setModalVisible] = useState(false)


  return (
    <HomeContext.Provider value={{
      modalVisible, setModalVisible, bebidas, setBebidas
    }}>
      <Container>
        <Item>
          <h1>Bebidas</h1>
        </Item>
        <Item>
          <Button
            onClick={() => setModalVisible(true)}
          >Cadastrar bebida</Button>
        </Item>
        <Item>
          <TableBebidas />
        </Item>
        <Modal>
          <Item>
            <FormBebidas />
          </Item>
        </Modal>
      </Container>
    </HomeContext.Provider>
  );
};
