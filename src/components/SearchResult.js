import {searchSubject} from "../rxjs/store";
import {useEffect, useState} from "react";
import ResultList from "./ResultList";

const SearchResult = () => {
  const [resultList, setResultList] = useState([]);
  useEffect(() => {
    const resultSub = searchSubject
      .subscribe((result) => setResultList(result));
    return () => resultSub.unsubscribe();
  });

  return (
    <div style={{display: "flex", flexDirection: "row", alignContent: "flex-start", justifyContent: "flex-start"}}>
      <div style={{minWidth: "280px", maxWidth: "420px"}}>
      <ResultList resultList={resultList} />
      </div>
    </div>
  );
};

export default SearchResult;