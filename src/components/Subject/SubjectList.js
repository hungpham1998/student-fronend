import React, { Component } from 'react';
 import {Link } from 'react-router-dom'
 export default class ListSubject extends Component {
    render() { 
        return (
            <div className="panel panel-primary">
            <div className="panel-heading d-flex justify-content-between">
                <h3 className="panel-title">Danh Sách Môn Học</h3>
                <Link to="/subject/add" className="btn btn-info mb-10">
                    Thêm 
                </Link>
            </div>
            <div className="panel-body">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Code</th>
                            <th>Tên Môn học</th>
                             <th>Số tín</th>   
                            <th>Note</th>
                            <th>Chức Năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}
