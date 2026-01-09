import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./layout/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<h1 className="my-90">Home</h1>} />
          <Route path="about" element={<h1 className="my-90">About</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
