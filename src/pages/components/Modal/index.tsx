import { useContext, useEffect, useRef } from "react";
import { HomeContext } from "../../../context/HomeContext";
import { ModalBase, ModalContent } from "./styles";

type PropsType = {
  children?: React.ReactNode,
}

export default function Modal({ children }: PropsType): JSX.Element {
  const modalRef = useRef<HTMLHeadingElement>(null);
  const { modalVisible, setModalVisible } = useContext(HomeContext)

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.style.display = modalVisible ? 'block' : 'none'
    }
  }, [modalVisible])

  return (
    <ModalBase ref={modalRef} onClick={(e) => {
      if (e.target === modalRef.current)
        setModalVisible(false)
    }}>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalBase>
  )
}
