import React from 'react';

const UserList = ({ users }) => {
    return (
        <div>
            <h2>Registered Users</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        {user.name} - {user.email} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
