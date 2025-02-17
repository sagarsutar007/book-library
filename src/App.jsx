import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Test from "./pages/Test";
import Layout from "./pages/layouts/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<Homepage />} />
        </Route>
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;