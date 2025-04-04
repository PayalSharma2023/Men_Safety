import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Therapy from "./pages/Therapy";
import Community from "./pages/Community";
import Chat from "./pages/Chat";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/therapy" element={<Therapy />} />
        <Route path="/stories" element={<Community />} />
        <Route path="/help" element={<Chat />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
