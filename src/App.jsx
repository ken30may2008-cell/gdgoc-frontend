import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar"; 
import Footer from "./Component/Footer";
import Landing from "./Pages/Landing"; 
import Overview from "./Pages/Overview";

export default function App() {
  return (
    <BrowserRouter>
      {/* Bungkus utama agar Footer selalu di bawah */}
      <div className="flex min-h-screen flex-col">
        <Navbar />
        
        {/* Konten utama (Routes) akan melar mengisi ruang kosong */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/Overview" element={<Overview />} /> 
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}