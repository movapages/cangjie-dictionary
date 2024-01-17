import SearchHistory from "./components/SearchHistory";
import SearchComponent from "./components/SearchComponent";

function App() {
  return (
    <div style={{width: "90%", margin: "auto"}}>
      <h2 style={{color: "red", paddingLeft: "5px", fontFamily: "kaiti"}}>倉頡辭典</h2>
      <div
        style={{display: "grid", minHeight: "max-content",
        border: "1px dotted lightgray",
        "gridTemplateColumns": "1fr 2fr"}}>
        <SearchComponent/>
        <SearchHistory/>
      </div>
    </div>
  );
}

export default App;
