import styled from 'styled-components';

export const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.329) !important;
  overflow: hidden;
  position: relative;
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
`;
