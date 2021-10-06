import React, { useRef, useState } from 'react';
import { Wrapper, ModalBox } from './components/styledComponents/template';

export const PracticeModal = ({ handleModal }) => {
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
        <button onClick={handleModal}>X</button>
        <div>
          <h3>Header</h3>
        </div>
        <div>
          <img
            className="modal-image"
            src="https://res.cloudinary.com/dytheecsk/image/upload/c_scale,w_713/v1622647791/timon-studler-ABGaVhJxwDQ-unsplash_wg7plb.jpg"
            alt="A group of people are walking around in a train station."
          />
        </div>
      </ModalBox>
    </Wrapper>
  );
};
