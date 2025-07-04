import { useMemo } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Suporte from "../pages/Suporte";
import Solucoes from "../pages/Solucoes";
import Painel from "../pages/Painel";
import Login from "../pages/Login";
import PrivateRoute from "../components/Auth";
import Socios from "../pages/Socios";
import Vakinha from "../pages/Vakinha";
import Apadrinhamento from "../pages/Apadrinhamento";
import Adota from "../pages/Adota"
import Localizacao from "../pages/Localizacao"
import Doacao from "../pages/Doacao"
 
function App() {
 
 
  return (
    <BrowserRouter>
      <div className="Content flex min-h-screen flex-col">
        <Header/>
        <main className="flex flex-grow container mx-auto p-4 mt-[100px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/painel" element= {
              <PrivateRoute>
              <Painel/>
              </PrivateRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/socios" element={<Socios />} />
            <Route path="/vakinha" element={<Vakinha />} />
            <Route path="/apadrinhamento" element={<Apadrinhamento />} />
            <Route path="/Adota" element={<Adota />} />
            <Route path="/Localizacao" element={<Localizacao />} />
            <Route path="/Doacao" element={<Doacao />} />
          </Routes>
        </main>
        <Footer />
       
      </div>
    </BrowserRouter>
  );
}
 
export default App;
