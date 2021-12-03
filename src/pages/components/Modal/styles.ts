import styled from "@emotion/styled";

export const ModalBase = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  background-color: #000;
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  margin: auto;
  margin-top: 25vh;
  padding: 20px;
  min-width: 300px;
  max-width: 40%;
`
