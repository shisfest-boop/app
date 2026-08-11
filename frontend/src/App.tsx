import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import Events from "@/pages/Events";
import Contact from "@/pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <Navbar />
      <div className="wrap page-body">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
