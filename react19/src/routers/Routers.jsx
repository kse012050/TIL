import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router'
import Main from '../page/Main';
import State from '../page/State';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/state" element={<State />} />
            </Routes>
        </BrowserRouter>
    );
}

