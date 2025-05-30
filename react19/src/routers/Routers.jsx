import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router'
import Main from '../page/Main';
import State from '../page/State';
import Effect from '../page/Effect';
import LayoutEffect from '../page/LayoutEffect';
import InsertionEffect from '../page/InsertionEffect';
import Reducer from '../page/Reducer';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/state" element={<State />} />
                <Route path="/effect" element={<Effect />} />
                <Route path="/layoutEffect" element={<LayoutEffect />} />
                <Route path="/insertionEffect" element={<InsertionEffect />} />
                <Route path="/reducer" element={<Reducer />} />
            </Routes>
        </BrowserRouter>
    );
}

