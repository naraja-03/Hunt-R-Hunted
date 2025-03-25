import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

function RouterPage() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterPage
