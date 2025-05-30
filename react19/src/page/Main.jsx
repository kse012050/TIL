import React from 'react';
import { Link } from 'react-router';

export default function Main() {
    return (
        <div>
            <Link to=''>메인</Link>
            <Link to='/state'>useState()</Link>
            <Link to='/effect'>useEffect()</Link>
            <Link to='/layoutEffect'>useLayoutEffect()</Link>
            <Link to='/insertionEffect'>useInsertionEffect()</Link>
            <Link to=''>메인</Link>
            <Link to=''>메인</Link>
            <Link to=''>메인</Link>
        </div>
    );
}

