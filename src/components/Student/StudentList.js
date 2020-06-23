import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StudentList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading d-flex justify-content-between">
                    <h3 className="panel-title">Danh Sách Học sinh</h3>
                    <Link to="/student/add" className="btn btn-info mb-10">
                        Thêm 
                    </Link>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                {/* <th>Mã</th> */}
                                <th>Code</th>
                                <th>Họ</th>
                                <th>Tên</th>
                                <th>Ngày sinh</th>
                                <th> Địa chỉ</th>
                                <th> Lớp </th>
                                <th>Chức Năng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
