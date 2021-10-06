import React, { useRef, useState } from 'react';
import { Wrapper, ModalBox } from './components/styledComponents/template';

export const PracticeModal = ({ handleModal, component: Component }) => {
  const [isOnDiv, setIsOnDiv] = useState(false);

  const handleOnClickModal = (_) => {
    if (!isOnDiv) {
      handleModal();
    }
  };

  return (
    <Wrapper onClick={handleOnClickModal}>
      <ModalBox
        onMouseEnter={() => setIsOnDiv(true)}
        onMouseLeave={() => setIsOnDiv(false)}
      >
        <Component />
      </ModalBox>
    </Wrapper>
  );
};
