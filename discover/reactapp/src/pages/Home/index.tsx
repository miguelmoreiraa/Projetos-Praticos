import { useState, useEffect } from "react";
import "./styles.css";

import Card, { CardProps } from "../../components/Card";
import axios from "axios";

type ProfileResponse = {
  name: string;
  avatar_url: string;
};

type User = {
  name: string;
  avatar: string;
};

export default function Home() {
  //OBS  variables  and  function
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  // a cada update no browser o useEffect será chamado.
  useEffect(() => {
    /* 
     na aula foi feita dessa maneira, eu também fiz, mas eu quis usar o axios
     para treinar o uso, e CONSEGUI!!!!!!!!
     fetch("https://api.github.com/users/birobirobiro")
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      });
    */
    axios
      .get("https://api.github.com/users/miguelmoreiraa")
      .then((response) => {
        const data = response.data as ProfileResponse;
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        });
      })
      .catch((error) => console.log(error));
  }, []);
  // isso é as deps do useEffect,
  // então se ele estiver vazio, toda vez que o browser carregar será chamado...
  // se tiver deps no useEffect cada vez que a deps foi atualizada
  // ele tambem atualizará

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de Perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}
