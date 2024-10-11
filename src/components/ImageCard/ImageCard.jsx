import css from './ImageCard.module.css';

const ImageCard = () => {
  return (
    <div className={css.card}>
      <img src="https://via.placeholder.com/150" alt="Placeholder" />
    </div>
  );
};

export default ImageCard;
