import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function ListUsers() {
  
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token'); // Recupere o token armazenado

  useEffect(() => {
    fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error('Falha na autenticação');
        }
      })
      .then(data => {
        setUsers(data); // Atualize o estado com os dados recebidos
      })
      .catch(error => {
        console.error(error);
      });
  }, [token]);


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
                <button className="btn btn-primary mr-2" style={{marginRight: '10px'}} onClick={() => {}}>Editar</button>
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
