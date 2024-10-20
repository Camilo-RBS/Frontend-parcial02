import React, { useState } from 'react';
import axios from 'axios';
import UserForm from '../User/UserForm';

const Home = () => {
    const [message, setMessage] = useState('');

    const handleFormSubmit = async (formData) => {
        try {
            await axios.post('http://localhost:3000/api/users', formData);
            setMessage('Usuario registrado con éxito!');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div>
            <h1>Registro de Usuarios</h1>
            <UserForm onSubmit={handleFormSubmit} />
            {message && <p>{message}</p>} {/* Mensaje de éxito */}
        </div>
    );
};

export default Home;
