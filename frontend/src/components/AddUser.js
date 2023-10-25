import api from '../service/api';
import React from 'react'
import { useState } from 'react';

export default function AddUser() {
    const [formData, setFormData] = useState({
        name: '',
        login: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const userToSave = {
          name: formData.name,
          login: formData.login,
          senha: formData.password
        };

        api
        .post(`users`, userToSave)
        .then(response => {
            console.log("Posting data: ", response);
            window.location.reload();
        })
        .catch((err) => {
            console.error("Ops! Ocorreu um erro!" + err);
        });

        
      };
    
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <h2 style={{textAlign: 'center'}}>Cadastro de Usuário</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder='Digite seu nome'
                    value={formData.name}
                    style={{marginBottom:'15px'}}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="login">Login</label>
                  <input
                    type="text"
                    className="form-control"
                    id="login"
                    name="login"
                    placeholder='Digite seu nome de usuário'
                    value={formData.login}
                    style={{marginBottom:'15px'}}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder='Digite sua senha'
                    id="password"
                    name="password"
                    value={formData.password}
                    style={{marginBottom:'15px'}}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{marginTop:'15px'}}>Cadastrar</button>
              </form>
            </div>
          </div>
        </div>
      );}
