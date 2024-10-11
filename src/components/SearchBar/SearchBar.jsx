import { GrSearch } from 'react-icons/gr';
import css from './SearchBar.module.css';
// import toast from 'react-hot-toast';

const SearchBar = () => {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <input
          className={css.field}
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchButton} type="button">
          <GrSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
