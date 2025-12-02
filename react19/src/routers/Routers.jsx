import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router'
import Main from '../page/Main';
import State from '../page/State';
import Effect from '../page/Effect';
import LayoutEffect from '../page/LayoutEffect';
import InsertionEffect from '../page/InsertionEffect';
import Reducer from '../page/Reducer';
import Ref from '../page/Ref';
import Transition from '../page/Transition';
import Id from '../page/Id';
import DeferredValue from '../page/DeferredValue';
import Optimistic from '../page/Optimistic';
import ImperativeHandle from '../page/imperativeHandle';

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
                <Route path="/ref" element={<Ref />} />
                <Route path="/id" element={<Id />} />
                <Route path="/transition" element={<Transition />} />
                <Route path="/deferredValue" element={<DeferredValue />} />
                <Route path="/optimistic" element={<Optimistic />} />
                <Route path="/imperativeHandle" element={<ImperativeHandle />} />
            </Routes>
        </BrowserRouter>
    );
}

