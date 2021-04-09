import {getAllUsers} from "./client";
import {useState, useEffect} from 'react'

import './css/App.css';

function App() {

    const [users, setUsers] = useState([]);

    const fetchUsers = () => getAllUsers()
        .then(response => response.json())
        .then(data => setUsers(data));

    useEffect(() => {
        console.log("component is mounted");
        fetchUsers();
    }, []);

    return <p>Users: {users.length}</p>;
}

export default App;
