import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./layout/Page";
import NotFound from "./layout/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route
            index
            element={
              <h1 className="my-90 text-center text-5xl font-bold">
                Home goes here
              </h1>
            }
          />
          <Route
            path="about"
            element={
              <h1 className="my-90 text-center text-5xl font-bold">
                About goes here
              </h1>
            }
          />
          <Route
            path="services"
            element={
              <h1 className="my-90 text-center text-5xl font-bold">
                Services goes here
              </h1>
            }
          />
          <Route
            path="gallery"
            element={
              <h1 className="my-90 text-center text-5xl font-bold">
                Gallery goes here
              </h1>
            }
          />
          <Route
            path="contact"
            element={
              <h1 className="my-90 text-center text-5xl font-bold">
                Contact goes here
              </h1>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
