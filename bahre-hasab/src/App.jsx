import { useState } from "react";

import "./App.css";
import Search from "./components/Search";

function App() {
  const [year, setYear] = useState(2016);

  return (
    <>
      <Search year={year} setYear={setYear} />
    </>
  );
}

export default App;
