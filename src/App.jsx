
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login/Login.jsx"
import Register from "./Pages/Registrar-se/Registrar-se.jsx"
import TelaInicial from "./Pages/Tela Inicial/Tela Inicial.jsx";
import Home from "./Pages/Home/Home.jsx"
import Funcionarios from "./Pages/Funcionario/Funcionarios.jsx"
import Categoria from "./Pages/Categoria/Categoria.jsx";
import Produto from "./Pages/Produto/Produto.jsx"

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/TelaInicial" element={<TelaInicial/>}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/Funcionarios" element={<Funcionarios/>}></Route>
            <Route path="/Categoria" element={<Categoria/>}></Route>
            <Route path="/Produto" element={<Produto/>}></Route>
        </Routes>
        </BrowserRouter>
  )
}

export default App
