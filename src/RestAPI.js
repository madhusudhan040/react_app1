import React, { Component } from 'react'
import axios from 'axios'
import {Link } from 'react-router-dom'

//axios.get(url)


// GLOBAL VARIABLE FOR REASAPI _URL
const url =`https://jsonplaceholder.typicode.com/users`
const ulr=`http://localhost:3002/users`

class RestAPI extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
            UserData: [] , 
            UserDatas   : []  //empty array
        }
        console.log(`!!!!!!!!!!!!!!!!!!!!!!!!! RESTAPI is  Mounting Method !!!!!!!!!!!!!!!!!!!!!!`)

    }
    render() {
        return (<><div className='container p-5' >
            <h2 className='text-center'>Fetching  RESTAPI Data Using Global  URL/CLIENT </h2>
            <table className='table table-bordered table-info'>
                <thead className='table table-dark' >
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>WEBSITE</th>
                        <th>EMAIL</th>
                        <th colSpan={3} className='text-center'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.UserData.map((res, i) => {
                            return (<tr key={i}>
                                <td>{res.id}</td>
                                <td>{res.name}</td>
                                <td>{res.website}</td>
                                <td>{res.email}</td>
                                <td >
                                    <Link to={`/restapi/${res.id}`} className='btn btn-success'>view</Link>
                                </td>
                                <td>
                                <button className='btn btn-warning'>update</button>
                                </td>
                                <td>
                                <button className='btn btn-danger'>delete</button>
                                </td>
                            </tr>

                            )
                        })
                    }
                </tbody>
            </table>
            <table className='table table-bordered table-info'>
                <thead className='table table-dark' >
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>WEBSITE</th>
                        <th>EMAIL</th>
                        <th colSpan={3} className='text-center'>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.UserDatas.map((res, i) => {
                            return (<tr key={i}>
                                <td>{res.id}</td>
                                <td>{res.name}</td>
                                <td>{res.username}</td>
                                <td>{res.email}</td>
                            </tr>

                            )
                        })
                    }
                        {
                this.state.UserData.map((res, i) => {
                    return (<tr key={i}>
                        <td>{res.id}</td>
                        <td>{res.name}</td>
                        <td>{res.username}</td>
                        <td>{res.email}</td>
                        <td >
                                    <Link to={`/restapi/${res.id}`} className='btn btn-success'>view</Link>
                                </td>
                                <td>
                                <button className='btn btn-warning'>update</button>
                                </td>
                                <td>
                                <button className='btn btn-danger'>delete</button>
                                </td>
                    </tr>

                    )
                })
            } 
                </tbody>
            </table>

            {/* {
                this.state.UserData.map((res, i) => {
                    return (<ul key={i}>
                        <li>{res.id}</li>
                        <li>{res.name}</li>
                        <li>{res.username}</li>
                        <li>{res.email}</li>
                    </ul>

                    )
                })
            }  */}
        </div></>)
    }
    componentDidMount() {
        axios.get(url).then((result) => this.setState({ UserData: result.data })).catch();
        axios.get(ulr).then((result) => this.setState({ UserDatas: result.data })).catch();
    }

}

export default RestAPI