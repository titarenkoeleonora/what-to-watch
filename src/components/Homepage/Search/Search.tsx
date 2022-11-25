import { ChangeEvent, FC, FormEvent, useState } from 'react';

import { useAppDispatch } from '../../../store/hooks';
import { clearMovies } from '../../../store/moviesSlice';
import Button from '../../UI/Buttons/Button/Button';
import { SearchForm, SearchInput } from './Search.styles';

interface SearchProps {
  saveSearch(value: string): void;
  resetPage(): void;
}

const Search: FC<SearchProps> = ({ saveSearch, resetPage }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const dispatch = useAppDispatch();

  const onSearchInput = (evt: ChangeEvent<HTMLInputElement>) => setInputValue(evt.target.value);

  const onSearchSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (inputValue) {
      saveSearch(inputValue);
      resetPage();

      dispatch(clearMovies());
    }
  };

  return (
    <SearchForm onSubmit={onSearchSubmit}>
      <SearchInput
        placeholder="What do you want to watch?"
        value={inputValue}
        onInput={onSearchInput}
      />
      <Button type="submit">Search</Button>
    </SearchForm>
  );
};

export default Search;
