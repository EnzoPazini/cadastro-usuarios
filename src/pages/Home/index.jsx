import { useState } from "react";
import "./style.css";
import Delete from "../../assets/delete.svg";

function Home() {
  const users = [
    { id: "1111", name: "Enzo", age: 22, email: "enzo@gmail.com" },
    { id: "2222", name: "Ray", age: 21, email: "ray@gmail.com" },
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input type="text" placeholder="Nome" />
        <input type="number" placeholder="idade" />
        <input type="email" placeholder="Email" />
        <button type="submit">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="user-card">
          <div>
            <p>
              Nome <span>{user.name}</span>
            </p>
            <p>
              Idade <span>{user.age}</span>
            </p>
            <p>
              Email <span>{user.email}</span>
            </p>
          </div>
          <button>
            <img src={Delete} alt="Deletar" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
