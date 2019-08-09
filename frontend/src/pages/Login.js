import React, {useState} from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({history}){

    const [username,setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault(); // previne que o evento ocorra 
        
        const response = await api.post('/devs',{
            // username :username,
            username // short syntax es6 
        });

        const { _id } = response.data;



        history.push(`/dev/${_id}`);
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src = {logo} alt="Tindev" />
                <input  
                    placeholder="Digite seu usuário do Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">
                        Enviar
                </button>
            </form>
        </div>
        
    );
}

