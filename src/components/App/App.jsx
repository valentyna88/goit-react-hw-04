import css from './App.module.css';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

import fetchImages from '../../unsplash-api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  // const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        setIsLoading(true);
        setisError(false);

        const data = await fetchImages(query, page);
        const results = data.results;

        if (results.length === 0) {
          toast('There is no results with this search query', {
            duration: 4000,
          });
          return;
        }
        setImages(prevImages => [...prevImages, ...results]);
      } catch (error) {
        setisError(true);
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      fetchHandler();
    }
  }, [query, page]);

  const handleSubmit = searchQuery => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]); // Очищення галереї перед новим пошуком
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      {isError && <ErrorMessage message={isError} />}
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      <LoadMoreBtn />
      <ImageModal />
    </div>
  );
}

export default App;
