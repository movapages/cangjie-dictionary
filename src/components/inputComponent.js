import {useState, useEffect} from "react";
import {cangjieSubject, historySubject, searchSubject} from "../rxjs/store";
import {isHan, isLat, sortArrKeys} from "../utils";

const InputComponent = () => {

  const [inputString, setInputString] = useState('');
  const [curLang, setCurLang] = useState(null);
  const [cjObj, setCJObj] = useState({});

  useEffect(() => {
    const subCJ = cangjieSubject
      .subscribe((data) => {
        setCJObj(data);
      });
    return () => subCJ.unsubscribe();
  },[]);
  const onChangeHandler = event => {
    setInputString(event.target.value);
    setCurLang((isHan(event.target.value) && 'zi2c') || (isLat(event.target.value) && 'c2zi') || null);
  };
  const onKeyDownHandler = event => {
    if (event.key === 'Enter') {
      const curInputValue = event.target.value.toLowerCase();
      if (curLang === 'zi2c') {
        const curZI2Cresult = (typeof cjObj[curLang][curInputValue] !== 'undefined') ?
          [{[curInputValue]: cjObj[curLang][curInputValue]}] : [];
        searchSubject.next(curZI2Cresult);
      } else if (curLang === 'c2zi') {
        let answer = [];
        const pattern = new RegExp('^' + curInputValue.replace(/[-]/g, '\\w') + '$');
        for (let key of Object.keys(cjObj[curLang])) {
          if (key.match(pattern)) {
            let tmp = {};
            tmp[key] = [...cjObj[curLang][key]];
            answer.push(Object.assign({}, tmp));
          }
        }
        const sortedResultSet = sortArrKeys(answer);
        searchSubject.next(sortedResultSet);
      }
      else {searchSubject.next([]);}
      if (searchSubject.getValue().length) {
        let prevSet = [...historySubject.getValue()];
        prevSet.unshift(event.target.value.toUpperCase());
        historySubject.next([...prevSet.slice(0,5)]);
      }
      setInputString('');
    }
  };

  return (
    <div style={{padding: "5px", minWidth: "300px"}}>
      <input
        maxLength={5}
        style={{border: "1px solid lightgrey", fontSize: "18px",
          maxWidth: "120px",
          textAlign: "center",
          borderRadius: "3px", padding: "3px"}}
        placeholder="ABCDE/漢字" type="text"
        value={inputString}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  );

};
export default InputComponent;
