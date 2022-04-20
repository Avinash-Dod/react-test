import Header from "../../components/Header/Header"
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
const Dashboard = (props) => {
    console.log(props.data);


    return (

        <>
            <Header />

            <div className="sidebar w3-bar-block w3-light-grey w3-card" style={{ width: '10%' }}>
                <a href=" " className="w3-bar-item w3-button side-button" style={{ border: "solid 1px black" }}>Users</a>

            </div>
            <div className="container" style={{ width: '100%' }}>
                <h2>Users</h2>
                {/* <div className="Table">
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

                        {
                           props.data.map((user) => (
                                <tbody key={user.id}>
                                    <tr >
                                        <td className="avt"><img src={user.avatar} alt="item" /></td>
                                        <td>{user.id}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td><a href=" "> Edit</a></td>
                                        <td><button > Delete</button></td>

                                    </tr>
                                </tbody>
                            ))}
                    </table>
                </div> */}
                </div>

        </>
    )
}
const mapStatetoProps = (state) => {
    return { data: state.UserReducer }
}

const mapDispatchprops = (dispatch) => {
    // return { onFetchData: () => dispatch(fetchData()) }
}


export default connect(mapStatetoProps, mapDispatchprops)(Dashboard);
