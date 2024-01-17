import {historySubject} from "../rxjs/store";
import {useEffect, useState} from "react";
import HistoryList from "./HistoryList";

const SearchHistory = () => {
  const [historyList, setHistoryList] = useState([]);
  useEffect(() => {
    const historySub = historySubject
      .subscribe((history) => setHistoryList(history));
    return () => historySub.unsubscribe();
  }, []);
  return (<div style={{display: "flex", flexDirection:"column", flex: "1", padding: "3px"}}>
    <div style={{maxWidth: "480px", border: "1px solid lightgray", borderRadius: "7px", minHeight: "260px"}}>
      <div
        style={{fontSize: "20px", display: "flex", flexDirection: "row",
          justifyItems: "center", justifyContent: "center", padding: "5px",
          borderBottom: "1px solid lightgray", color: "darkgrey"}}>
        Search History
      </div>
    <HistoryList historyList={historyList} />
    </div>
  </div>);
};
export default SearchHistory;