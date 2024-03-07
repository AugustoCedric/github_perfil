import React, { useState, useEffect } from "react";

import styles from "../ReposList/ResposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setestaCarregando] = useState(true);
  const [deuErro, setDeuErro] = useState(false);

  useEffect(() => {
    setestaCarregando(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Usuário não encontrado");
        }
        return res.json();
      })
      .then((resJson) => {
        setTimeout(() => {
          setestaCarregando(false);
          setRepos(resJson);
        }, 3000);
      })
      .catch((e) =>{
        setestaCarregando(false);
        setDeuErro(true);
        console.error("Erro ao carregar repositórios: ",e.message);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      {estaCarregando ? (
        <h1>Carregando...</h1>
      ) : deuErro ? (
        <p className={styles.msgText}>Erro ao carregar Repositórios. Verifique o nome do usuário.</p>

      ) : (
        <ul className={styles.list}>
          {/* {repos.map((repositorio) => ( */}
          {repos.map(({ id, name, language, html_url }) => (
            <li className={styles.listItem} key={id}>
              <div className={styles.itemNames}>
                <b>Nome:</b> {name}
              </div>
              <div className={styles.ItemLanguage}>
                <b>Linguagem:</b> {language}
              </div>
              <a className={styles.itemLink} target="_blank" href="{html_url}">
                Visitar no Github
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
