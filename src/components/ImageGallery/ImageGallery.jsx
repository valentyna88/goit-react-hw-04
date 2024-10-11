import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

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
