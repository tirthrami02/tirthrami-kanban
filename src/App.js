import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout';

function App() {

  const initialOrder = parseInt(localStorage.getItem('order')) || 0;
  const initialGroup = parseInt(localStorage.getItem('group')) || 0;

  const [order, setOrder] = useState(initialOrder);
  const [group, setGroup] = useState(initialGroup);

  useEffect(() => {
    localStorage.setItem('order', order.toString());
    localStorage.setItem('group', group.toString());
  }, [order, group]);

  return (
    <div className="App">
      <Navbar order={order} group={group} setGroup={setGroup} setOrder={setOrder} />
      <Layout order={order} group={group} />
    </div>
  );
}

export default App;
