import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./pages/page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
