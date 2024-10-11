import css from './App.module.css';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

import fetchImages from '../../unsplash-api';

function App() {
  return (
    <div className={css.container}>
      <SearchBar />
      <ImageGallery />
      <LoadMoreBtn />
      <Loader />
      <ErrorMessage />
      <ImageModal />
    </div>
  );
}

export default App;
