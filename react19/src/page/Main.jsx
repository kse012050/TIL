import React from 'react';
import { Link } from 'react-router';

export default function Main() {
    return (
        <div>
            <Link to=''>메인</Link><br/>
            <Link to='/state'>useState()</Link><br/>
            <Link to='/effect'>useEffect()</Link><br/>
            <Link to='/layoutEffect'>useLayoutEffect()</Link><br/>
            <Link to='/insertionEffect'>useInsertionEffect()</Link><br/>
            <Link to='/reducer'>useReducer()</Link><br/>
            <Link to='/ref'>useRef()</Link><br/>
            <Link to='/id'>useId()</Link><br/>
            <h2>기존 데이터를 가지고 작업</h2>
            <Link to='/transition'>useTransition()</Link><br/>
            <Link to='/deferredValue'>useDeferredValue()</Link><br/>
            <h2>API 를 가지고 작업</h2>
            <Link to='/optimistic'>useOptimistic()</Link><br/>
            <Link to=''>메인</Link><br/>
        </div>
    );
}

