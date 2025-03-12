import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Test from "./pages/Test";
import Layout from "./pages/layouts/Layout";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import TestReducer from "./pages/TestReducer";
import ChildPage from "./pages/ChildPage";
import QueryString from "./pages/QueryString";
import { AppProvider } from "./context/AppContext";
import ExampleContext from "./pages/ExampleContext";
import TestContext from "./pages/TestContext";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <AppProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:serviceId" element={<ServiceDetail />} />

              <Route path="*" element={<Homepage />} />
            </Route>
            <Route path="context" element={<ExampleContext />} />
            <Route path="test-context" element={<TestContext />} />
            <Route path="test" element={<ChildPage />} />
            <Route path="query-string" element={<QueryString />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AppProvider>
  )
}

export default App;