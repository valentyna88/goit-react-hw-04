import css from './ImageCard.module.css';

const ImageCard = ({ src, alt }) => {
  return (
    <div className={css.card}>
      <img className={css.image} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
