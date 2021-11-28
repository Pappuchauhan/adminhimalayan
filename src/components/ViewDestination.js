import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import DraftEditor from './Common/DraftEditor';

const ViewDestination = () => {

    return (
        <div className="content">
            <div className="container">
                <div className="page-title">
                    <h3>View Destination</h3>
                </div>
                <div className="box box-primary">
                    <div className="box-body">
                        <table width="100%" className="table table-hover" id="dataTables-example">
                            <thead>
                                <tr>
                                    <th>Package Name</th>
                                    <th>Date Created</th>
                                    <th>Status</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ladakh Bike Trip</td>
                                    <td>2021-26-11 05:30:45</td>
                                    <td>Active</td>
                                    <td className="text-end">
                                        <a href="" className="btn btn-outline-info btn-rounded"><i className="fas fa-pen"></i></a>
                                        <a href="" className="btn btn-outline-danger btn-rounded"><i className="fas fa-trash"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDestination;