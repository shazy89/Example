import styled from 'styled-components';

export const Wrapper = styled.section`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.329) !important;
  overflow: hidden;
  animation: fadeIn 0.5s ease-out;
  z-index: 100;
  transition: all 0.3s;
`;
export const ModalBox = styled.div`
  position: absolute;
  background-color: white;
  width: 40rem;
  height: 40rem;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  box-shadow: 2px 2px 10px 3px hsl(0deg 0% 47% / 75%);
  border-radius: 10px;
  transition: all 0.4s;
  z-index: 999;
`;
