import { GrSearch } from 'react-icons/gr';

const SearchBar = () => {
  return (
    <div>
      <header>
        <form>
          <input
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">
            <GrSearch />
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
