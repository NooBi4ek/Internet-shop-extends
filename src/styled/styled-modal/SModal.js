import styled from "styled-components";
export const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.modal ? "1" : "0")};
  pointer-events: ${(props) => (props.modal ? "all" : "none")};
  transition: 0.5s;
`;
export const Modalcontent = styled.div`
  overflow-y: auto;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  width: 40vw;
  height: 80vh;
`;
export const Modal_div = styled.div`
  margin: 50% auto;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
`;
