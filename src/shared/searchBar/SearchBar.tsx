import { InputBase } from "@mui/material";
import useStyles from "./SearchBar.style";
import SearchIcon from "@mui/icons-material/Search";

interface IProps {
  search_text: string;
  handleChange: any;
  placeholder?:any
}
function SearchBar({ search_text, handleChange, placeholder }: IProps) {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder={placeholder ? placeholder : "Type here to search"}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={search_text}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
