import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  // if (images.length === 0) {
  //   return null;
  // }
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <li key={image.id} className={css.item}>
          <ImageCard
            image={image}
            onClick={() => onImageClick(image.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
