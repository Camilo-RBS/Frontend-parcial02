import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Inicio';
import UserRecords from './Pages/Registros';

const App = () => {
    return (
        <>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/records">Registros de Usuarios</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/records" element={<UserRecords />} />
            </Routes>
        </>
    );
};


export default App;
