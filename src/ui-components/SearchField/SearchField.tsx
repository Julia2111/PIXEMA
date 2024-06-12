import { SearchContext } from "../../Context/SearchContext";
import styles from "./SearchField.module.scss";
import { useContext, ChangeEvent, useState, useEffect } from "react";
import useDebounce from "../../hook/useDebaunce";
// import apiFilmService form './'

const SearchField = () => {
  const [string, setString] = useState("");
  const search = useContext(SearchContext);

  const debaunceValue = useDebounce(string, 500);

  // useEffect(() => {
  //   if (debaunceValue) {
  //   }
  // }, [debaunceValue]);

  const onChange = function (e: ChangeEvent<HTMLInputElement>) {
    const searchString = e.target.value;
    setString(searchString);
    search.setSearchString(searchString);
  };

  return (
    <input
      className={styles.input}
      value={string}
      placeholder="Search movie"
      onChange={onChange}
    />
  );
};

export default SearchField;
