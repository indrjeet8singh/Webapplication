import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdOpen } from "react-icons/io";
import { Link} from 'react-router-dom';
import { backendurl } from '../../Servicepage';



function Myhomepage() {

    const [mydata, setdata] = useState([])

    const columns = [
        { field: '_id', headerName: 'sno', width: 200 },
        { field: 'fullname', headerName: 'FullName', width: 100 },
        { field: 'email', headerName: 'Email Id', width: 200 },
        { field: 'phone', headerName: 'Phone No', width: 100 },
        { field: 'dob', headerName: 'DOB', width: 200 },
        { field: 'gender', headerName: 'Gender', width: 70 },
        { field: 'course', headerName: 'Course', width: 50 },
        { field: 'profile', headerName: 'Profile Pic', width: 70 }
    ];

    const myalldata = () => {
        axios.get(`${backendurl}/allusers`).then((d) => {
            console.log(d.data);
            setdata(d.data)
        })
    }
    useEffect(() => {
        myalldata();
    }, []);



    const mydeleterecord = (id)=>{
        axios.delete(`${backendurl}/deleterecord/${id}`).then((d) => {
            console.log(d.data);
            myalldata();
        })
    }




    return (
        <Fragment>


            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div class="card text-bg-primary mb-3">
                            <div class="card-header">Header</div>
                            <div class="card-body">
                                <h5 class="card-title">Total User: {mydata.length}</h5>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <table class="table table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th scope="col">Ids</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone no</th>
                                    <th scope="col">DOB</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Profile</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mydata.map((d)=>{
                                    return(
                                        <tr>
                                        <th scope="row">{d._id}</th>
                                        <td>{d.fullname}</td>
                                        <td>{d.email}</td>
                                        <td>{d.phone}</td>
                                        <td>{d.dob}</td>
                                        <td>{d.gender}</td>
                                        <td>{d.course}</td>
                                        <td> <img src={d.profile} alt={d._id} width={50}/></td>
                                        <td>
                                        <Link class="badge text-bg-primary" to={`view/`+d._id}><IoMdOpen/></Link>
                                        <Link class="badge text-bg-warning" to={`edit/`+d._id}><FaEdit/></Link>
                                        <button type="button" class="badge text-bg-danger" onClick={()=>{mydeleterecord(d._id)}}><MdDelete/></button>
                                        </td>
                                    </tr>
                                    )
                                })}
                                
                               
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>

                        {mydata.length <= 0 ? "<p>No data</p>" :
                            <div style={{ height: 400, width: '100%' }}>

                                <DataGrid
                                    rows={mydata}
                                    columns={columns}
                                    getRowId={(mydata) => mydata.name + mydata.phone}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 5 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10]}
                                    checkboxSelection
                                />
                            </div>

                        }

                    </div>
                </div>

            </div>
        </Fragment>

    )
}

export default Myhomepage