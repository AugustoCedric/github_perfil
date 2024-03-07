import React, { useState, useEffect } from "react";

import styles from "../ReposList/ResposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setestaCarregando] = useState(true);

  useEffect(() => {
    setestaCarregando(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setestaCarregando(false);
          setRepos(resJson);
        }, 3000);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      {estaCarregando ? (
        <h1>Carregando...</h1>
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
