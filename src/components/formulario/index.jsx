import { useState, useEffect } from "react";

const Formulario = () => {
  let [materiaA, setMateriaA] = useState(0);
  let [materiaB, setMateriaB] = useState(0);
  let [materiaC, setMateriaC] = useState(0);
  let [nome, setNome] = useState("");

  useEffect(() => {
    console.log("o estado mudou");
  });

  const alteraNome = (evento) => {
    setNome(
      (estadoAnterior) => {
        return evento.target.value;
      },
      [nome]
    );
  };

  useEffect(() => {
    console.log("materia A mudou para: " + materiaA);
  }, [materiaA]);

  const renderizarResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
      return <p>Olá, {nome} você foi APROVADO</p>;
    } else {
      return <p>Olá, {nome} você foi REPROVADO</p>;
    }
  };

  return (
    <form>
        <ul>
            {[1,2,3,4,5,6,7,8,9,10].map(item => <li>{item}</li>)}
        </ul>
      <input type="text" placeholder="Seu nome   " onChange={alteraNome} />
      <input
        type="number"
        placeholder="Nota da materia A"
        onChange={(evento) => setMateriaA(parseInt(evento.target.value))}
      />
      <input
        type="number"
        placeholder="Nota da materia B"
        onChange={(evento) => setMateriaB(parseInt(evento.target.value))}
      />
      <input
        type="number"
        placeholder="Nota da materia C"
        onChange={(evento) => setMateriaC(parseInt(evento.target.value))}
      />
      {renderizarResultado()}
    </form>
  );
};

export default Formulario;
