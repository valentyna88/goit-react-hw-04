import css from './App.module.css';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

import fetchImages from '../../unsplash-api';
import { useEffect, useState } from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  const handleSubmit = searchQuery => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const loadImages = async (searchQuery, page) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchImages(searchQuery, page);
      setImages(prevImages => [...prevImages, ...data.results]);
      // setPage(prevPage => prevPage + 1);
    } catch (error) {
      setError('Failed to load images.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      loadImages(query, 1);
    }
  }, [query]);

  useEffect(() => {
    if (page > 1) {
      loadImages(query, page);
    }
  }, [page]);

  const loadMoreImages = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = image => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {modalImage && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
