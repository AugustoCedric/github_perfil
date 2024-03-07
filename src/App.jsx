import React, { useState } from "react";
import Perfil from "./components/Perfil";
// import Formulario from "./components/Perfil/formulario";
import ReposList from "./components/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      {/* <Formulario /> */}
    </>
  );
}

export default App;
