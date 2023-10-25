import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import api from '../service/api';

export default function ListUsers() {
  //const [users, setUsers] = useState([]);
  const users = [
    {
      "id": 1,
      "name": "João",
      "login": "joao123"
    },
    {
      "id": 2,
      "name": "Maria",
      "login": "maria456"
    },
    {
      "id": 3,
      "name": "Pedro",
      "login": "pedro789"
    },
    {
      "id": 4,
      "name": "Ana",
      "login": "ana321"
    }
  ]
  

  useEffect(() => {
    api.get('users')
      .then((response) => {
        //setUsers(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados de usuários:', error);
      });
  }, []);

  const editUser = (e) => {
  };


  return (
    <div className="container" style={{textAlign: 'center'}}>
      <h2 className="mt-3">Usuários</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Login</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.login}</td>
              <td>
                <button className="btn btn-primary mr-2" style={{marginRight: '10px'}} onClick={() => {editUser(user.id)}}>Editar</button>
                <button className="btn btn-danger mr-2" style={{marginRight: '10px'}}>Remover</button>
                <button className="btn btn-success" style={{marginRight: '10px'}}>Criar Encomenda</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
