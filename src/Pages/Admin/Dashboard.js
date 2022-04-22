import Header from "../../components/Header/Header"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import ReactPaginate from "react-paginate"
import { pageContent } from "../../Redux/actions/action"
const Dashboard = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.UserReducer)
    let Users = useSelector(state => state.FetchReducer.userList)
    const Pages = useSelector(state => state.FetchReducer)
    // console.log("this is page ",Pages); 
    let pap
    let limit = 6
    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `https://reqres.in/api/users/?page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        pap = data
        return dispatch(pageContent(pap))
    };

    const handlePageClick = async (data) => {
        // console.log(data.selected);
        let currentPage = data.selected + 1;
        // console.log(currentPage);
        const commentsFormServer = await fetchComments(currentPage);

    };

    console.log(Users);
    console.log(data);
    const navigate = useNavigate()
    if (data === false) {
        navigate("/")
    }
    else {

        return (
            <>
                <Header />

                <div className="sidebar w3-bar-block w3-light-grey w3-card" style={{ width: '10%' }}>
                    <a href=" " className="w3-bar-item w3-button side-button" style={{ border: "solid 1px black" }}>Users</a>
                </div>
                <div className="container" style={{ width: '100%' }}>
                    <h2>Users</h2>
                    <div className="Table">
                        <table className="table w3-table-all" >
                            <thead>
                                <tr style={{"text-align":"center"}}>
                                    <th className="avt">Avtar</th>
                                    <th >Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th colSpan={2}>Actions</th>
                                </tr>
                            </thead>

                            {Users.data.length ?
                                (
                                    Users.data.map(user => {
                                        return (
                                            <tbody key={user.id}>
                                                <tr >
                                                    <td className="avt"><img src={user.avatar} alt="item" /></td>
                                                    <td>{user.id}</td>
                                                    <td>{user.first_name}</td>
                                                    <td>{user.last_name}</td>
                                                    <td>{user.email}</td>
                                                    <td><button > Delete</button></td>

                                                </tr>
                                            </tbody>

                                        )
                                    })
                                ) :
                                <tr><td colSpan="6"><h3> <i className="fa fa-times-circle"></i> No Data</h3></td></tr>
                            }
                        </table>
                       
                    </div>
                    <ReactPaginate
                            previousLabel={"previous"}
                            nextLabel={"next"}
                            breakLabel={"..."}
                            pageCount={Pages.pages}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={2}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination justify-content-center"}
                            pageClassName={"page-item"}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName={"active"}
                        />
                </div>
            </>
        )
    }
}
export default Dashboard;
