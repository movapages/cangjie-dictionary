const HistoryList = (props) => {
  const {historyList} = props;
  const curList = historyList.map((item, index) => <li key={index}>{item}</li>);
  return <ul>{curList}</ul>;
};

export default HistoryList;