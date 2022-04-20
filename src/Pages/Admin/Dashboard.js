import Header from "../../components/Header/Header"
// import './dashboard.css'
import React, { useState, useEffect } from 'react';
const Dashboard = () => {
    
    let state = {
        list: [],
        perPage: 0,
        page: 0,
        pages: 0,
    };
    const [page, setPage] = useState(state)
    //axios API data
    var axios = require('axios');
    var data = '';

    var config = {
        method: 'get',
        url: 'https://reqres.in/api/users/',
        headers: {},
        data: data
    };

    //pagination API
    const fetchMyAPI = async () => {

        await axios(config)
            .then(function (response) {
                let pagination = (response.data)
                let l = pagination.data
                let perP = pagination.per_page
                let pag = {
                    ...state,
                    perPage: pagination.per_page,
                    page: pagination.page,
                    pages: Math.floor(parseInt(l.length / perP)),
                    list: pagination.data,

                }
                setPage(pag)
            })
            .catch(function (error) {
                console.log(error);
            });


    };
    console.log(page)
    //useEffect api fetching
    useEffect(() => {
        fetchMyAPI()
        
    }, [])

    //fetch user list through axios API
   
    //page click response   
    const handlePageClick = (event) => {
        let page = event.selected.page_num;
        // this.setState({page})
    }
    //delete button with api 
    const Delete = (e) => {
        console.log(e);
        const Id = { id: e }

        var axios = require('axios');
        var userId = JSON.stringify(Id);
        var config = {
            method: 'delete',
            url: 'https://reqres.in/api/users/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: userId
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    return (

        <>
            <Header />

            <div className="sidebar w3-bar-block w3-light-grey w3-card" style={{ width: '10%' }}>
                <a href=" " className="w3-bar-item w3-button side-button" style={{ border: "solid 1px black" }}>Users</a>

            </div>
            <div className="container" style={{ width: '100%' }}>
                <h2>Users</h2>
                <div className="Table">
                    <table className="table" >
                        <thead>

                            <tr >
                                <th className="avt">Avtar</th>
                                <th >Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        {/* */}

                        {
                           page.list.map((user) => (
                                <tbody key={user.id}>
                                    <tr >
                                        <td className="avt"><img src={user.avatar} alt="item" /></td>
                                        <td>{user.id}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td><a href=" "> Edit</a></td>
                                        <td><button onClick={() => Delete(user.id)} > Delete</button></td>

                                    </tr>
                                </tbody>
                            ))}
                    </table>



                </div>
                <div className="w3-center">
                    <div className="w3-bar w3-border">
                        <a href=" " className="w3-bar-item w3-button">&laquo;</a>
                        <a href=" " className="w3-bar-item w3-button">1</a>
                        <a href=" " className="w3-bar-item w3-button">2</a>
                        <a href=" " className="w3-bar-item w3-button">3</a>
                        <a href=" " className="w3-bar-item w3-button">4</a>
                        <a href=" " className="w3-bar-item w3-button">&raquo;</a>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Dashboard