import css from './ImageModal.module.css';

const ImageModal = () => {
  return (
    <div className={css.modal}>
      <img src="https://via.placeholder.com/600" alt="Large view" />
    </div>
  );
};

export default ImageModal;
