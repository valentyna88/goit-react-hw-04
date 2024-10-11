import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import fetchImages from '../../unsplash-api';

const ImageGallery = () => {
  return (
    <div className={css.list}>
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </div>
  );
};

export default ImageGallery;
