import logo from "./logo.svg";
import "./App.css";
import Search from "./Components/Search";
import Pagination from "./Components/Pagination";
import News from "./Components/News";
import { AppContext } from "./Context";

function App() {
  

  return (
    <>
      <div className="main">
      <h2 className="Header">Tech News to Go</h2>
        <Search />
        <Pagination />
        <News />
      </div>
    </>
  );
}

export default App;
