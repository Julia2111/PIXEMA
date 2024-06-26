import { SearchContext } from "../../Context/SearchContext";
import styles from "./SearchField.module.scss";
import { useContext, ChangeEvent, useState } from "react";

const SearchField = () => {
  const [string, setString] = useState("");
  const search = useContext(SearchContext);

  const onChange = function (e: ChangeEvent<HTMLInputElement>) {
    const searchString = e.target.value;
    setString(searchString);
    if (searchString.length === 0) {
      search.setSearchString("");
    } else {
      search.setSearchString(searchString);
    }
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
