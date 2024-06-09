import { Loader, MultiSelect } from "@mantine/core";
import ChevronIcon from "../../icons/ChevronIcon";
import { useGetGenresQuery } from "../../../api/moviesApi";
import { useAppDispatch, useAppSelector } from "../../../hook/hooks";
import { setGenres } from "../../../store/filterSlice";
import commonClasses from "../MoviesFilters.module.css";
import classes from "./GenresFilter.module.css";
import { useDispatch, useSelector } from "react-redux";

const GenresFilter = () => {
  const selectedGenres = useSelector((state) => state.filters.selectedGenres);
  const dispatch = useDispatch();

  const { data, isLoading } = useGetGenresQuery();

  return (
    <MultiSelect
      flex="1 1 100%"
      w="100%"
      label="Genres"
      placeholder={selectedGenres.length ? "" : "Select genre"}
      data={data?.genres}
      value={selectedGenres}
      onChange={(genres: string[]) => dispatch(setGenres(genres))}
      withCheckIcon={false}
      rightSection={isLoading ? <Loader size="xs" /> : <ChevronIcon />}
      classNames={{
        root: commonClasses.filterRoot,
        wrapper: commonClasses.filterWrapper,
        label: commonClasses.filterLabel,
        input: commonClasses.inputRoot,
        dropdown: commonClasses.selectDropdown,
        option: commonClasses.selectOption,
        pill: classes.pill,
        pillsList: classes.pillsList,
      }}
    />
  );
};
export default GenresFilter;
