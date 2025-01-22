import { Route, Routes } from "react-router-dom";

import { DetailPage, HomePage, NotFoundPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Detail Page */}
      <Route path="/restaurants/:id" element={<DetailPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
