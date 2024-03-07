import React, { useState } from "react";
import Perfil from "./components/Perfil";
// import Formulario from "./components/Perfil/formulario";
import ReposList from "./components/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      <div className="divBlock">
        <input
          type="text"
          placeholder="Digite aqui o usuário Github..."
          className="inputUsuario"
          onBlur={(e) => setNomeUsuario(e.target.value)}
        />

        {nomeUsuario.length > 4 && (
          <>
            <Perfil nomeUsuario={nomeUsuario} />
            <ReposList nomeUsuario={nomeUsuario} />
          </>
        )}
      </div>
      {/* <Formulario /> */}
    </>
  );
}

export default App;
