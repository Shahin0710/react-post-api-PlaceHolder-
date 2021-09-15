import React, { useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUser(result.data);
    }

    return (
    <>
        <Navbar />
        <div className="container">
            <div className="py-4">
                <h1>React User API</h1>
                <table class="table table-dark">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                  {
                      users.map((user, index) => (
                        <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link class="btn btn-primary" to={`/user/${user.id}`}>View</Link>
                        </td>
                        </tr>
                      ))
                  }
                </tbody>
                </table>
            </div>
        </div>
    </>
    );
};

export default Home;