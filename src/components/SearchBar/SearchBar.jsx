import { GrSearch } from 'react-icons/gr';
import css from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <header className={css.header}>
      <form className={css.form}>
        <GrSearch />
        <input
          className={css.field}
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
