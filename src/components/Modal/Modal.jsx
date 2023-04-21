import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer, Image } from './Modal.styled';

const Modal = ({ image, onClose }) => (
  <Overlay onClick={onClose}>
    <ModalContainer onClick={e => e.stopPropagation()}>
      <Image src={image.largeImageURL} alt={image.tags} />
    </ModalContainer>
  </Overlay>
);

Modal.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
