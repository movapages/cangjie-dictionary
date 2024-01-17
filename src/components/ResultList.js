const ResultList = (props) => {
  const {resultList} = props;
  console.log('resultList: ', resultList);
  let curList = <span style={{color: "lightgray"}}>Empty List</span>;
  if (resultList.length) {
    curList = [];
    for (let obj of [...resultList].splice(0,25)) {
      Object.keys(obj).forEach((key) => {
        // console.log('KEY: ', key);
        const curKey = key.toUpperCase();
        const curValue = obj[key].join(',').toUpperCase();
        curList.push(<li style={{fontSize: "20px", fontFamily: "kaiti"}} key={curKey}>
          <span style={{color: "darkred"}}>{curKey}</span>
          <span style={{color: "gray"}}> 《 </span>
          <span style={{color: "darkgreen"}}>{curValue}</span>
          <span style={{color: "gray"}}> 》</span>
        </li>)
      });
    }
    console.log('curList: ', curList);
  }
  return <ul>{curList}</ul>;
};

export default ResultList;