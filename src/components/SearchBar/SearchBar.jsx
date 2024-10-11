import { GrSearch } from 'react-icons/gr';
import css from './SearchBar.module.css';
import { useState } from 'react';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (inputValue.trim() === '') {
      toast.error('Please enter a search term!');
      return;
    }
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.field}
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className={css.searchButton} type="submit">
          <GrSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
