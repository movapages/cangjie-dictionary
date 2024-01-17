import InputComponent from "./inputComponent";
import SearchResult from "./SearchResult";

const SearchComponent = () => {
  return (
    <div style={{flex: "1", minWidth: "360px"}}>
      <InputComponent/>
      <SearchResult/>
    </div>
  );
};

export default SearchComponent;
