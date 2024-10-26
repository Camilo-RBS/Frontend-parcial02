import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserRecords = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://64.23.154.3:3000/api/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <div>
            <h2>Usuarios Registrados</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <h3>{user.nombre}</h3>
                        <p>Email: {user.email}</p>
                        <p>Edad: {user.edad}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserRecords;