import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NotFoundPage from "./pages/notFound/notFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
