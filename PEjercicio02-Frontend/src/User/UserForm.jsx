import React, { useState } from 'react';

const UserForm = () => {
    const [formData, setFormData] = useState({ nombre: '', email: '', edad: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://64.23.154.3:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {

                setError(result.error);
                setSuccess('');
            } else {

                setSuccess('Usuario creado con éxito');
                setError('');
                setFormData({ nombre: '', email: '', edad: '' });
            }
        } catch (error) {
            console.error('Error en la conexión:', error);
            setError('Hubo un problema al conectar con el servidor.');
        }
    };

    return (
        <div>
          
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="edad"
                    placeholder="Edad"
                    value={formData.edad}
                    onChange={handleChange}
                    required
                    min="1"
                />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default UserForm;