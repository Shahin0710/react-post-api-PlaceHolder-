import React, { useState, useEffect} from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { useParams } from "react-router-dom";

const User = () => {

    const { id } = useParams();

    const [users, setUsers] = useState([]);
    const [address, setAddress] = useState([]);
    const [geo, setGeo] = useState([]);
    const [company, setCompany] = useState([]);

    const loadUsers = async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUsers(result.data);
        setAddress(result.data.address);
        setGeo(result.data.address.geo);
        setCompany(result.data.company);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return (
    <>
        <Navbar />
        <div className="container">
            <div className="py-4">
                <h1>User Id: {id}</h1>
                <h4>Address</h4>
                <table class="table table-dark">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Street</th>
                    <th scope="col">Suite</th>
                    <th scope="col">City</th>
                    <th scope="col">Zip Code</th>
                    <th scope="col">geo-lat</th>
                    <th scope="col">geo-lng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{address.street}</th>
                    <td>{address.suite}</td>
                    <td>{address.city}</td>
                    <td>{address.zipcode}</td>
                    <td>{geo.lat}</td>
                    <td>{geo.lng}</td>
                    </tr> 
                </tbody>
                </table>
            </div>
            <div className="py-1">
                <h4>Company Details</h4>
                <table class="table table-dark">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Company Name</th>
                    <th scope="col">Company Catch Phrase</th>
                    <th scope="col">Company-bs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{company.name}</th>
                    <td>{company.catchPhrase}</td>
                    <td>{company.bs}</td>
                    </tr> 
                </tbody>
                </table>
            </div>
            <div className="py-1">
                <h4>Contact</h4>
                <table class="table table-dark">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Phone</th>
                    <th scope="col">Web Site</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">{users.phone}</th>
                    <td>{users.website}</td>
                    </tr> 
                </tbody>
                </table>
            </div>
        </div>
    </>
    );
};

export default User;
