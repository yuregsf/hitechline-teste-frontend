import { createContext } from "react";

export interface IBebida { nome: string, marca: string }

type HomeContextType = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void
  bebidas: IBebida[]
  setBebidas: (bebidas: IBebida[] | ((bebidas: IBebida[]) => IBebida[])) => void
}

export const HomeContext = createContext<HomeContextType>({
  modalVisible: false,
  setModalVisible: () => { },
  bebidas: [],
  setBebidas: () => { }
})
